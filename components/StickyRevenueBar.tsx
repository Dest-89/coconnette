'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevenueCTA from '@/components/RevenueCTA';

interface StickyRevenueBarProps {
  appearAfterScroll?: number; // percentage of page scrolled (default 30%)
  hideNearFooter?: boolean;
}

export default function StickyRevenueBar({
  appearAfterScroll = 30,
  hideNearFooter = true,
}: StickyRevenueBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Show after scrolling past threshold
      const shouldShow = scrollPercentage >= appearAfterScroll;

      // Hide near footer if enabled
      if (hideNearFooter) {
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const isNearFooter = footerRect.top < window.innerHeight + 100;
          setIsVisible(shouldShow && !isNearFooter);
          return;
        }
      }

      setIsVisible(shouldShow);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appearAfterScroll, hideNearFooter]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-4 bottom-4 md:inset-x-0 md:bottom-6 md:mx-auto md:max-w-3xl z-40"
        >
          <div className="backdrop-blur bg-white/80 border border-[#E8DCC9]/60 rounded-2xl shadow-lg p-3 md:p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm md:text-base text-[#2E2E2E] font-medium text-center sm:text-left">
                Curious what your home could earn with Coconnette?
              </p>
              <RevenueCTA
                variant="sticky"
                size="md"
                placementId="sticky-global"
                openModal={true}
                icon={true}
                className="whitespace-nowrap"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
