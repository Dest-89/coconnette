'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Placeholder: log to console
      console.log('Contact form submitted:', formData);
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Redirect to success page
    router.push('/contact/success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-6 md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full name */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-cocoon-charcoal mb-2"
          >
            Full name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Full name"
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
            placeholder="Your full name"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-cocoon-charcoal mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email address"
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
            placeholder="your@email.com"
          />
        </motion.div>

        {/* Reason for contact */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
        >
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-cocoon-charcoal mb-2"
          >
            Reason for contact *
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            aria-label="Reason for contact"
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
          >
            <option value="">Select a reason</option>
            <option value="booking">Booking inquiry</option>
            <option value="list">List my property</option>
            <option value="general">General question</option>
          </select>
        </motion.div>

        {/* Message */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-cocoon-charcoal mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            aria-label="Your message"
            aria-describedby="message-help"
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all resize-none"
            placeholder="Tell us how we can help..."
          />
        </motion.div>

        {/* Submit button */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.25, ease: 'easeOut' }}
        >
          <Button
            variant="primary"
            size="lg"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>

          {/* Disclaimer */}
          <p
            id="message-help"
            className="text-xs text-cocoon-fog text-center mt-4 leading-relaxed"
          >
            We reply within one business day.
          </p>
        </motion.div>

        {/* Secondary contact option */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
          className="text-center pt-2"
        >
          <p className="text-sm text-cocoon-fog">
            Prefer email?{' '}
            <a
              href="mailto:hello@coconnette.com"
              className="text-cocoon-sage hover:text-cocoon-charcoal font-medium transition-colors underline underline-offset-2"
            >
              hello@coconnette.com
            </a>
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}
