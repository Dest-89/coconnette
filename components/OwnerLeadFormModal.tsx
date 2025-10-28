'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface OwnerLeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  placementId?: string;
  utmSource?: string;
  utmCampaign?: string;
}

export default function OwnerLeadFormModal({
  isOpen,
  onClose,
  placementId,
  utmSource,
  utmCampaign,
}: OwnerLeadFormModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Form submitted:', {
      name: formData.get('name'),
      email: formData.get('email'),
      city: formData.get('city'),
      bedrooms: formData.get('bedrooms'),
      platform: formData.get('platform'),
      message: formData.get('message'),
      placementId,
      utmSource: utmSource || 'site',
      utmCampaign: utmCampaign || 'revenue',
    });
    onClose();
  };

  const modal = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" data-role="modal">
        {/* Backdrop */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          aria-label="Close modal"
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        />

        {/* Modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative z-[9999] w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-[#E8DCC9]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-[#9AA3A7] hover:text-[#2E2E2E] transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 md:p-8">
            <h2 id="modal-title" className="text-2xl md:text-3xl font-heading font-semibold text-[#2E2E2E] mb-2 pr-8">
              Request a revenue estimate
            </h2>
            <p className="text-sm text-[#9AA3A7] mb-6">
              Tell us about your property and we'll provide a personalized revenue projection.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] placeholder-[#9AA3A7] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] placeholder-[#9AA3A7] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* City and Bedrooms row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all"
                  >
                    <option value="">Select city</option>
                    <option value="Paris">Paris</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Lisbon">Lisbon</option>
                    <option value="Copenhagen">Copenhagen</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Bedrooms *
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    required
                    className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all"
                  >
                    <option value="">Select</option>
                    <option value="studio">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>

              {/* Platform */}
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Current platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all"
                >
                  <option value="">Current platform…</option>
                  <option value="airbnb">Airbnb</option>
                  <option value="vrbo">VRBO</option>
                  <option value="both">Both</option>
                  <option value="none">Not listed yet</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-xl border border-[#E8DCC9] bg-white px-4 py-3 text-[15px] text-[#2E2E2E] placeholder-[#9AA3A7] focus:outline-none focus:ring-2 focus:ring-[#6FA890] transition-all resize-none"
                  placeholder="Tell us about your property..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#C06B3E] text-white rounded-2xl px-6 py-3 font-medium shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#C06B3E] focus:ring-offset-2 transition-all"
              >
                Request estimate
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-[#9AA3A7] text-center leading-relaxed">
                No obligation. We'll respond within 1 business day.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return typeof window !== 'undefined' ? createPortal(modal, document.body) : null;
}
