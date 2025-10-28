'use client';

import React, { useEffect, useRef, useState, useId } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ctaManager, getPriority } from '@/lib/cta';
import OwnerLeadFormModal from '@/components/OwnerLeadFormModal';

export type RevenueCTAProps = {
  variant?: 'primary' | 'outline' | 'ghost' | 'inline' | 'sticky';
  size?: 'md' | 'lg';
  copy?: 'default' | 'alt1' | 'alt2';
  href?: string;
  openModal?: boolean;
  placementId: string;
  icon?: boolean;
  className?: string;
  utmSource?: string;
  utmCampaign?: string;
  disableDedup?: boolean;
};

const COPY_VARIANTS = {
  default: 'Request a revenue estimate',
  alt1: 'What could your place earn?',
  alt2: 'See your projected earnings',
};

const VARIANT_STYLES = {
  primary:
    'bg-[#C06B3E] text-white rounded-2xl px-6 py-3 shadow-sm hover:brightness-110 focus:ring-2 focus:ring-[#C06B3E] transition-all font-medium',
  outline:
    'border-2 border-[#6FA890] text-[#6FA890] bg-white/80 rounded-2xl px-6 py-3 hover:bg-[#EAF2EF] focus:ring-2 focus:ring-[#6FA890] transition-all font-medium',
  ghost:
    'text-[#6FA890] hover:underline underline-offset-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#6FA890] focus:ring-offset-2 rounded',
  inline: 'text-[#6FA890] underline underline-offset-2 hover:text-[#2E2E2E] transition-colors',
  sticky:
    'bg-[#C06B3E] text-white rounded-2xl px-6 py-3 shadow-lg hover:brightness-110 focus:ring-2 focus:ring-[#C06B3E] transition-all font-medium',
};

const SIZE_STYLES = {
  md: 'text-base',
  lg: 'text-lg px-8 py-4',
};

export default function RevenueCTA({
  variant = 'primary',
  size = 'md',
  copy = 'default',
  href = '/owners#estimate',
  openModal = false,
  placementId,
  icon = false,
  className = '',
  utmSource = 'site',
  utmCampaign = 'revenue',
  disableDedup = false,
}: RevenueCTAProps) {
  const router = useRouter();
  const pathname = usePathname();
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const id = useId();
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyText = COPY_VARIANTS[copy];
  const ariaLabel = `Request a revenue estimate for property owners`;

  // Register with CTA manager for de-duplication (unless disabled)
  useEffect(() => {
    if (disableDedup) return;

    const priority = getPriority(placementId);

    ctaManager.register({
      id,
      placementId,
      priority,
      element: elementRef.current,
      setVisible: (visible) => {
        setIsVisible(visible);
      },
    });

    return () => {
      ctaManager.unregister(id);
    };
  }, [id, placementId, disableDedup]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Track click
    ctaManager.trackClick(placementId, variant, copy, pathname);

    if (openModal) {
      setIsModalOpen(true);
    } else {
      // Build URL with UTM parameters
      const url = new URL(href, window.location.origin);
      url.searchParams.set('utm_source', utmSource);
      url.searchParams.set('utm_medium', 'cta');
      url.searchParams.set('utm_campaign', utmCampaign);
      url.searchParams.set('placement', placementId);

      router.push(url.toString());
    }
  };

  const baseClasses = `
    ${VARIANT_STYLES[variant]}
    ${SIZE_STYLES[size]}
    inline-flex items-center justify-center gap-2
    transition-opacity duration-300
    ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const Tag = variant === 'inline' || variant === 'ghost' ? 'a' : 'button';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Tag
          ref={elementRef as any}
          onClick={handleClick}
          href={href}
          className={baseClasses}
          data-cta="revenue"
          data-placement={placementId}
          data-cta-id={id}
          aria-label={ariaLabel}
          role={Tag === 'a' ? undefined : 'button'}
        >
          {copyText}
          {icon && (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          )}
        </Tag>
      </motion.div>

      {/* Modal */}
      {openModal && (
        <OwnerLeadFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          placementId={placementId}
          utmSource={utmSource}
          utmCampaign={utmCampaign}
        />
      )}
    </>
  );
}
