'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export default function Stays() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const properties = [
    {
      id: 1,
      title: 'Montmartre Linen Loft',
      location: 'Paris, France',
      guests: '2-4 guests',
      bedrooms: '1BR',
      price: '$165',
      status: 'Available',
      badge: 'success' as const,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200',
    },
    {
      id: 2,
      title: 'Canal-Side Quiet',
      location: 'Amsterdam, Netherlands',
      guests: '2-3 guests',
      bedrooms: 'Studio',
      price: '€140',
      status: 'Limited dates',
      badge: 'warning' as const,
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200',
    },
    {
      id: 3,
      title: 'Old Port Hideaway',
      location: 'Montreal, Canada',
      guests: '2-4 guests',
      bedrooms: '1BR',
      price: '$155',
      status: 'Available',
      badge: 'success' as const,
      image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1200',
    },
    {
      id: 4,
      title: 'Alfama Heritage Studio',
      location: 'Lisbon, Portugal',
      guests: '1-2 guests',
      bedrooms: 'Studio',
      price: '€125',
      status: 'Available',
      badge: 'success' as const,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200',
    },
    {
      id: 5,
      title: 'Nyhavn Light Nest',
      location: 'Copenhagen, Denmark',
      guests: '2-3 guests',
      bedrooms: '1BR',
      price: 'kr.1200',
      status: 'Booked soon',
      badge: 'warning' as const,
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1200',
    },
    {
      id: 6,
      title: 'Le Marais Calm',
      location: 'Paris, France',
      guests: '2-5 guests',
      bedrooms: '2BR',
      price: '$210',
      status: 'Available',
      badge: 'success' as const,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* 1) Hero Header */}
        <section className="relative h-[320px] overflow-hidden">
          {/* Background image with parallax */}
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"
              alt="Soft light apartment with neutral tones"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-cocoon-porcelain/85" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                Find your next cocon
              </h1>
              <p className="text-lg md:text-xl text-cocoon-fog leading-relaxed">
                Curated homes with hotel-level care — ready whenever you are.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2) Filters Bar (Sticky) */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
          className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-cocoon-sand/40 py-4"
        >
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-cocoon-charcoal mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
                  >
                    <option value="">All cities</option>
                    <option value="paris">Paris</option>
                    <option value="amsterdam">Amsterdam</option>
                    <option value="montreal">Montreal</option>
                    <option value="lisbon">Lisbon</option>
                    <option value="copenhagen">Copenhagen</option>
                  </select>
                </div>

                {/* Dates */}
                <div>
                  <label className="block text-sm font-medium text-cocoon-charcoal mb-2">
                    Dates
                  </label>
                  <input
                    type="text"
                    placeholder="Select dates"
                    disabled
                    className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-fog focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all disabled:opacity-50"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-cocoon-charcoal mb-2">
                    Guests
                  </label>
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-charcoal focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all"
                  >
                    <option value="">Any</option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5+ guests</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-cocoon-charcoal mb-2">
                    Price range
                  </label>
                  <input
                    type="text"
                    placeholder="Any price"
                    disabled
                    className="w-full px-4 py-3 rounded-field border border-cocoon-sand bg-white text-cocoon-fog focus:outline-none focus:ring-2 focus:ring-cocoon-sage transition-all disabled:opacity-50"
                  />
                </div>

                {/* Search Button */}
                <div className="flex gap-3">
                  <Button variant="primary" fullWidth>
                    Search
                  </Button>
                  <button
                    className="text-sm text-cocoon-sage hover:text-cocoon-charcoal transition-colors whitespace-nowrap"
                    onClick={() => {
                      setSelectedLocation('');
                      setSelectedGuests('');
                    }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3) Property Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant={property.badge}>
                          {property.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-heading font-medium text-cocoon-charcoal mb-2 tracking-[-0.01em] group-hover:underline underline-offset-4 transition-all">
                        {property.title}
                      </h3>
                      <p className="text-sm text-cocoon-fog mb-3">
                        {property.location} · {property.guests} · {property.bedrooms}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-lg font-semibold text-cocoon-sage">
                          From {property.price}/night
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" fullWidth>
                        View details →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 4) Load More */}
            <motion.div
              {...fadeIn}
              className="text-center mt-16"
            >
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[200px]"
              >
                Load more stays
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 5) CTA Banner */}
        <section className="py-20 md:py-28 bg-cocoon-sand relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            }} />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              {...fadeIn}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                Own a place that deserves Coconnette care?
              </h2>
              <p className="text-lg md:text-xl text-cocoon-fog mb-8 leading-relaxed">
                We handle everything — from staging to guest support.
              </p>
              <Button variant="primary" size="lg">
                List your property
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
