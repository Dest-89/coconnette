'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function PropertyDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const propertyImages = [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600',
    'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1600',
  ];

  const keyDetails = [
    { icon: '🛏️', label: '1 Queen bed' },
    { icon: '🚿', label: '1 Bath' },
    { icon: '👥', label: '4 Guests' },
    { icon: '☕', label: 'Kitchen' },
    { icon: '🧺', label: 'Washer' },
    { icon: '🌿', label: 'Balcony' },
  ];

  const amenities = [
    'High-speed WiFi',
    'Hotel-grade linens',
    'Fully equipped kitchen',
    'Washer & dryer',
    'Coffee maker',
    'Hair dryer',
    'Iron & board',
    'Heating & AC',
    'Work desk',
    'Smart TV',
    'Bath essentials',
    'Fresh towels',
  ];

  const relatedStays = [
    {
      id: 2,
      title: 'Canal-Side Quiet',
      location: 'Amsterdam',
      price: '€140',
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=800',
    },
    {
      id: 3,
      title: 'Old Port Hideaway',
      location: 'Montreal',
      price: '$155',
      image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=800',
    },
    {
      id: 4,
      title: 'Alfama Heritage Studio',
      location: 'Lisbon',
      price: '€125',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    },
  ];

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {/* 1) Hero Gallery */}
        <section className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={propertyImages[currentImage]}
                alt="Property gallery"
                fill
                className="object-cover"
                priority
              />

              {/* Mobile swipe hint */}
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                Swipe ↔
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentImage((currentImage - 1 + propertyImages.length) % propertyImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-cocoon-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImage((currentImage + 1) % propertyImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-cocoon-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? 'bg-white w-8' : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2) Property Summary Header */}
        <section className="container-custom">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto pt-10 pb-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
              Montmartre Linen Loft
            </h1>
            <p className="text-lg text-cocoon-fog mb-4">
              Paris, France · 2-4 guests · 1 bedroom · 1 bath
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-cocoon-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-cocoon-fog">5.0 · 24 reviews</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-cocoon-terra">
              From $165 <span className="text-lg font-normal text-cocoon-fog">/ night</span>
            </p>

            <div className="mt-6 pt-6 border-t border-cocoon-sand/60" />
          </motion.div>
        </section>

        {/* 3) Key Details Grid */}
        <section className="container-custom py-12">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {keyDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{detail.icon}</div>
                  <p className="text-base text-cocoon-charcoal font-medium">{detail.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4) Description Block */}
        <section className="bg-cocoon-porcelain py-16 md:py-20">
          <motion.div {...fadeIn} className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-cocoon-charcoal mb-6 tracking-[-0.01em]">
                About this space
              </h2>
              <div className="text-lg text-[#6B6B6B] leading-relaxed space-y-4">
                <p>
                  Wake up to morning light and soft linen. This Paris apartment sits in a quiet corner of Montmartre with a view of rooftops and fresh coffee nearby.
                </p>
                <p>
                  Every detail is thought through — from curated art to hotel-grade linens. The space feels calm and lived-in, with warm wood tones, a fully equipped kitchen, and a balcony where you can watch the neighborhood wake up.
                </p>
                <p>
                  You're a 5-minute walk from local bakeries, wine bars, and the Sacré-Cœur. The apartment is professionally cleaned before each stay and includes everything you need for a restful visit.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5) Amenities Grid */}
        <section className="container-custom py-16 md:py-20 border-t border-b border-cocoon-sand/60">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-cocoon-charcoal mb-8 tracking-[-0.01em]">
              What this place offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amenities.slice(0, showAllAmenities ? amenities.length : 6).map((amenity, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.03 }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-cocoon-sage flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-cocoon-fog">{amenity}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="text-cocoon-sage hover:text-cocoon-charcoal font-medium transition-colors inline-flex items-center gap-2"
              >
                {showAllAmenities ? 'Show less' : 'Show all amenities'}
                <svg
                  className={`w-4 h-4 transition-transform ${showAllAmenities ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </section>

        {/* 6) Availability Calendar */}
        <section className="container-custom py-16 md:py-20">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-cocoon-charcoal mb-8 tracking-[-0.01em] text-center">
              Availability
            </h2>
            <div className="bg-white rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] p-8">
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-cocoon-sand/30 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-cocoon-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-lg font-heading font-semibold text-cocoon-charcoal">December 2024</h3>
                <button className="p-2 hover:bg-cocoon-sand/30 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-cocoon-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-sm font-medium text-cocoon-fog py-2">
                    {day}
                  </div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square flex items-center justify-center text-sm rounded-lg hover:bg-cocoon-sand/30 cursor-pointer transition-colors relative group"
                  >
                    <span className="text-cocoon-charcoal">{i + 1}</span>
                    {i % 5 === 0 && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cocoon-sage" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-cocoon-fog mt-6 text-center">
                Green dots indicate available dates
              </p>
            </div>
          </motion.div>
        </section>

        {/* 7) Host Info & Location */}
        <section className="bg-cocoon-porcelain py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Host Card */}
              <motion.div {...fadeIn} className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-cocoon-sage/20 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal">
                      Hosted by Camille
                    </h3>
                    <p className="text-sm text-cocoon-fog">Superhost · 3 years hosting</p>
                  </div>
                </div>
                <p className="text-cocoon-fog leading-relaxed mb-6">
                  Camille has been hosting in Paris since 2021. She takes pride in curating spaces that feel warm and welcoming, with thoughtful touches throughout.
                </p>
                <Button variant="ghost" fullWidth>
                  Contact host
                </Button>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-4">
                  Location
                </h3>
                <div className="rounded-2xl bg-cocoon-sand/30 h-[300px] flex items-center justify-center text-cocoon-fog">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 text-cocoon-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="font-medium">Montmartre, Paris</p>
                    <p className="text-sm">Exact location shown after booking</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8) CTA Section */}
        <section className="container-custom py-16">
          <motion.div {...fadeIn} className="bg-cocoon-sand rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
              Ready to book your stay at the Montmartre Linen Loft?
            </h2>
            <p className="text-lg text-cocoon-fog mb-8 max-w-2xl mx-auto">
              Instant booking available via Airbnb.
            </p>
            <Button variant="primary" size="lg" className="hover:brightness-110">
              Book on Airbnb
            </Button>
          </motion.div>
        </section>

        {/* 9) Related Stays */}
        <section className="container-custom py-16 md:py-20">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-cocoon-charcoal mb-10 tracking-[-0.01em]">
              Homes you may also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedStays.map((stay, index) => (
                <motion.div
                  key={stay.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/stays/${stay.id}`}>
                    <div className="rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={stay.image}
                          alt={stay.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 bg-white">
                        <h3 className="text-lg font-heading font-medium text-cocoon-charcoal mb-1 group-hover:text-cocoon-sage transition-colors">
                          {stay.title}
                        </h3>
                        <p className="text-sm text-cocoon-fog mb-3">{stay.location}</p>
                        <p className="text-base font-semibold text-cocoon-sage">
                          From {stay.price}/night
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
