'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Input from '@/components/Input';
import RevenueCTA from '@/components/RevenueCTA';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <>
      <Header />
      <main>
        {/* 1) Hero with parallax background */}
        <section className="relative bg-cocoon-porcelain py-20 md:py-28 overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            }} />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  className="text-xs uppercase tracking-[0.15em] text-cocoon-sage font-medium mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Boutique stays, quietly unforgettable
                </motion.p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-cocoon-charcoal mb-6 text-balance tracking-[-0.01em]">
                  Settle into your cocon
                </h1>
                <p className="text-lg lg:text-xl text-cocoon-fog mb-10 leading-relaxed max-w-lg">
                  Thoughtfully curated apartments and homes with hotel-level care. Soft light, clean lines, and everything where you expect it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-20">
                  <Button variant="primary" size="lg" href="/stays">
                    Check availability
                  </Button>
                  <Button variant="secondary" size="lg" href="/stays">
                    Explore stays
                  </Button>
                </div>

                {/* Mini form */}
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-cocoon-sand/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Input placeholder="Location" fullWidth disabled />
                    <Input placeholder="Dates" type="text" fullWidth disabled />
                    <Input placeholder="Guests" type="number" fullWidth disabled />
                  </div>
                  <Button variant="primary" size="md" fullWidth disabled className="mt-4 opacity-50 cursor-not-allowed">
                    Search
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Image with parallax */}
              <motion.div
                style={{ y: heroY }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
                  alt="Linen bedding with natural morning light and warm wood"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2) Trust badges */}
        <section className="py-10 bg-white border-b border-cocoon-sand/30">
          <div className="container-custom">
            <motion.div
              {...fadeIn}
              className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-sm text-cocoon-fog"
            >
              {[
                { icon: '★', label: 'Superhost partners' },
                { icon: '✓', label: 'Hotel-grade cleaning' },
                { icon: '◆', label: 'Self check-in' },
                { icon: '○', label: '24/7 support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-cocoon-sage flex items-center justify-center text-cocoon-sage">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3) Value props (3-up) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <motion.div {...fadeIn} className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">Our philosophy</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal tracking-[-0.01em]">
                Warm minimalism meets care
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: 'Warm minimalism',
                  body: 'Airy spaces with tactile touches: linen, wood, soft color.',
                  icon: (
                    <svg className="w-6 h-6 text-cocoon-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  ),
                },
                {
                  title: 'Easy from door to dream',
                  body: 'Smooth arrivals, smart guides, no guesswork.',
                  icon: (
                    <svg className="w-6 h-6 text-cocoon-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  ),
                },
                {
                  title: 'Boutique care',
                  body: 'Local team, quick replies, honest details.',
                  icon: (
                    <svg className="w-6 h-6 text-cocoon-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                },
              ].map((prop, index) => (
                <motion.div
                  key={prop.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                >
                  <Card hover={false} className="shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-cocoon-sage/10 flex items-center justify-center mb-6">
                      {prop.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-cocoon-charcoal mb-3 tracking-[-0.01em]">
                      {prop.title}
                    </h3>
                    <p className="text-cocoon-fog leading-relaxed">
                      {prop.body}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Featured stays with photography */}
        <section className="py-20 md:py-28 bg-cocoon-sand">
          <div className="container-custom">
            <motion.div {...fadeIn} className="mb-12">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">Where to stay</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal tracking-[-0.01em]">
                Featured stays
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Montmartre Linen Loft',
                  sub: 'Paris · 2–4 guests · 1BR',
                  price: 'From $165/night',
                  status: 'Available',
                  badge: 'success' as const,
                  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200',
                },
                {
                  title: 'Canal-Side Quiet',
                  sub: 'Amsterdam · 2–3 guests · Studio',
                  price: 'From €140/night',
                  status: 'Limited dates',
                  badge: 'warning' as const,
                  image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200',
                },
                {
                  title: 'Old Port Hideaway',
                  sub: 'Montreal · 2–4 guests · 1BR',
                  price: 'From $155/night',
                  status: 'Available',
                  badge: 'success' as const,
                  image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1200',
                },
              ].map((stay, index) => (
                <motion.div
                  key={stay.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={stay.image}
                        alt={stay.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-1 tracking-[-0.01em]">
                            {stay.title}
                          </h3>
                          <p className="text-sm text-cocoon-fog mb-3">
                            {stay.sub}
                          </p>
                          <p className="text-base font-semibold text-cocoon-charcoal">
                            {stay.price}
                          </p>
                        </div>
                        <Badge variant={stay.badge}>{stay.status}</Badge>
                      </div>
                      <Button variant="ghost" size="sm" fullWidth>
                        View details →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) How it works (Guests vs Owners) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <motion.div {...fadeIn} className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">How it works</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal tracking-[-0.01em]">
                Simple for everyone
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Guests */}
              <motion.div {...fadeIn} className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-cocoon-sage/5 rounded-full blur-2xl" />
                <div className="relative">
                  <h3 className="text-3xl font-heading font-semibold text-cocoon-charcoal mb-8 tracking-[-0.01em]">
                    For guests
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: 'Explore', body: 'Find a space that feels like you.' },
                      { title: 'Arrive', body: 'Seamless self check-in and clear guides.' },
                      { title: 'Exhale', body: 'Hotel-grade cleaning, plush linens, calm.' },
                    ].map((step, index) => (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cocoon-sage/10 flex items-center justify-center text-cocoon-sage font-heading font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-cocoon-charcoal mb-1">
                            {step.title}
                          </h4>
                          <p className="text-cocoon-fog leading-relaxed">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button variant="secondary" size="lg" href="/stays">
                      Explore stays
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Right: Owners */}
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-cocoon-terra/5 rounded-full blur-2xl" />
                <div className="relative">
                  <h3 className="text-3xl font-heading font-semibold text-cocoon-charcoal mb-8 tracking-[-0.01em]">
                    For owners
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: 'List', body: 'We stage, photograph, and publish your home.' },
                      { title: 'Host', body: 'Dynamic pricing, pro cleaning, guest screening.' },
                      { title: 'Grow', body: 'Transparent reporting and revenue optimization.' },
                    ].map((step, index) => (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cocoon-terra/10 flex items-center justify-center text-cocoon-terra font-heading font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-cocoon-charcoal mb-1">
                            {step.title}
                          </h4>
                          <p className="text-cocoon-fog leading-relaxed">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <RevenueCTA
                      variant="primary"
                      size="lg"
                      copy="default"
                      openModal={true}
                      placementId="home-owners-section"
                      icon={true}
                      disableDedup={true}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6) Why Coconnette (standards) */}
        <section className="py-20 md:py-28 bg-cocoon-porcelain">
          <div className="container-custom">
            <motion.div {...fadeIn} className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">Our standards</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                What you can count on
              </h2>
              <p className="text-lg text-cocoon-fog max-w-2xl mx-auto">
                Every stay meets our boutique hospitality checklist
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Hotel-grade cleaning', body: 'Meticulous checklist every turn.' },
                { title: 'Quality linens & essentials', body: 'Always crisp, always stocked.' },
                { title: 'Quiet, central locations', body: 'Close to life, far from noise.' },
                { title: 'Self check-in', body: 'Arrivals on your schedule.' },
                { title: 'Curated guides', body: 'Local favorites, no fluff.' },
                { title: 'Responsive support', body: 'We are here, day and night.' },
              ].map((standard, index) => (
                <motion.div
                  key={standard.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-cocoon-sage flex items-center justify-center mt-1 group-hover:bg-cocoon-sage transition-colors duration-200">
                    <svg
                      className="w-4 h-4 text-cocoon-sage group-hover:text-white transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cocoon-charcoal mb-1 text-lg">
                      {standard.title}
                    </h3>
                    <p className="text-sm text-cocoon-fog leading-relaxed">
                      {standard.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7) Testimonial with background */}
        <section className="py-20 md:py-28 bg-cocoon-sand relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600"
              alt="Warm interior lighting"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-custom relative z-10">
            <motion.div {...fadeIn} className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">Guest voices</p>
            </motion.div>
            <motion.div {...fadeIn} className="max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cocoon-sage/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cocoon-sage"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-2xl lg:text-3xl text-cocoon-charcoal leading-relaxed mb-8 font-light font-heading">
                  The space felt designed for rest—soft light, beautiful textures, and every detail thought through.
                </blockquote>
                <p className="text-base font-semibold text-cocoon-charcoal mb-1">
                  Elise M.
                </p>
                <p className="text-sm text-cocoon-fog">
                  5-star stay in Paris
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8) Owner CTA banner with terracotta overlay */}
        <section className="py-20 md:py-28 bg-[#C06B3E] relative overflow-hidden">
          {/* White overlay for softer terracotta */}
          <div className="absolute inset-0 bg-white opacity-[0.08]" />

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            }} />
          </div>

          <div className="container-custom relative z-10">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center text-white">
              <p className="text-xs uppercase tracking-[0.15em] opacity-90 mb-6">For property owners</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-6 tracking-[-0.01em]">
                Your property, beautifully managed
              </h2>
              <p className="text-lg lg:text-xl mb-10 leading-relaxed opacity-95">
                From staging to guest care to reporting, we handle the details.
              </p>
              <RevenueCTA
                variant="outline"
                size="lg"
                openModal={true}
                placementId="home-owner-banner"
                icon={true}
                disableDedup={true}
                className="!bg-white !text-cocoon-terra !border-white hover:!bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>
        </section>

        {/* 9) FAQ (accordion) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <motion.div {...fadeIn} className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.15em] text-cocoon-fog mb-4">Common questions</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal tracking-[-0.01em]">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'How do I book?',
                  a: 'Browse a stay and tap "Check availability" to see dates on Airbnb.',
                },
                {
                  q: 'What is your cleaning standard?',
                  a: 'Hotel-grade checklist, inspected after every turnover.',
                },
                {
                  q: 'Can I check in late?',
                  a: 'Yes - self check-in makes arrivals flexible.',
                },
                {
                  q: 'How do owners get paid?',
                  a: 'Monthly payouts with transparent statements.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                  className="border border-cocoon-sand/60 rounded-2xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-cocoon-porcelain/30 transition-colors"
                  >
                    <span className="font-heading font-semibold text-lg text-cocoon-charcoal pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-cocoon-sage flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-cocoon-fog leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10) Footer mini-CTA with background texture */}
        <section className="py-16 bg-cocoon-porcelain relative overflow-hidden border-t border-cocoon-sand/40">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600"
              alt="Warm wall texture"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-custom relative z-10">
            <motion.div {...fadeIn} className="text-center">
              <p className="text-2xl lg:text-3xl font-heading font-semibold text-cocoon-charcoal mb-8 tracking-[-0.01em]">
                Ready for a quieter kind of stay?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
                <Button variant="primary" size="lg" href="/stays">
                  Check availability
                </Button>
                <Button variant="ghost" size="lg" href="/contact">
                  Contact
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
