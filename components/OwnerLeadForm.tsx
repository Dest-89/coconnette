'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

interface OwnerLeadFormProps {
  source?: string;
  cityOptions?: string[];
  onSubmit?: (data: FormData) => void;
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  city: string;
  bedrooms: string;
  platform: string;
  message: string;
}

export default function OwnerLeadForm({
  source = 'owners-page',
  cityOptions = ['Paris', 'Amsterdam', 'Montreal', 'Lisbon', 'Copenhagen', 'Other'],
  onSubmit,
  compact = false,
}: OwnerLeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    city: '',
    bedrooms: '',
    platform: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Placeholder: log to console
      console.log('Form submitted:', { ...formData, source });
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-cocoon-sage/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-cocoon-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-2">
          Thank you!
        </h3>
        <p className="text-cocoon-fog">
          We will respond within 1 business day with your revenue estimate.
        </p>
      </motion.div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cocoon-charcoal mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cocoon-charcoal mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
            placeholder="your@email.com"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-cocoon-charcoal mb-2">
            Property city *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
          >
            <option value="">Select city</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-cocoon-charcoal mb-2">
            Bedrooms *
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
          >
            <option value="">Select</option>
            <option value="studio">Studio</option>
            <option value="1">1 bedroom</option>
            <option value="2">2 bedrooms</option>
            <option value="3">3 bedrooms</option>
            <option value="4+">4+ bedrooms</option>
          </select>
        </div>

        {/* Current platform */}
        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-cocoon-charcoal mb-2">
            Current platform
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
          >
            <option value="">Select</option>
            <option value="airbnb">Airbnb</option>
            <option value="vrbo">VRBO</option>
            <option value="both">Both</option>
            <option value="none">Not listed yet</option>
          </select>
        </div>

        {/* Message */}
        {!compact && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-cocoon-charcoal mb-2">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal placeholder:text-cocoon-fog/50 focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all resize-none"
              placeholder="Tell us about your property..."
            />
          </div>
        )}

        {/* Submit button */}
        <Button variant="primary" size="lg" fullWidth type="submit">
          Request a revenue estimate
        </Button>

        {/* Disclaimer */}
        <p className="text-xs text-cocoon-fog text-center leading-relaxed">
          No obligation. We will respond within 1 business day.
        </p>
      </form>
  );

  if (compact) {
    return formContent;
  }

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 md:p-8"
    >
      {formContent}
    </motion.div>
  );
}
