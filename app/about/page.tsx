'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const values = [
    {
      title: 'Warmth',
      description: 'Every detail is chosen to welcome you. From linens to lighting, we create spaces that feel like home.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
    },
    {
      title: 'Calm',
      description: 'No clutter, no chaos. Just airy rooms, soft colors, and the quiet confidence of good design.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Care',
      description: 'From arrival to checkout, we handle the details. So you can focus on the moments that matter.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const experiences = [
    {
      title: 'For Guests',
      description: 'Homes that feel considered, not just clean. Spaces designed for rest, work, and real life.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
    },
    {
      title: 'For Owners',
      description: 'Professional management without the stress. We stage, photograph, list, and host — you earn.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
    },
    {
      title: 'For Cities',
      description: 'Thoughtful stays that respect neighborhoods. No party houses, just quiet guests and local care.',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800',
    },
  ];

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {/* 1) Hero — The Feeling of a Cocon */}
        <section className="relative bg-[#F7F4EF] overflow-hidden py-20 md:py-32">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
              }}
            />
          </div>

          {/* Background image (subtle) */}
          <div className="absolute inset-0 opacity-[0.08]">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600"
              alt="Soft linen textures"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-custom max-w-[1240px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-[#2E2E2E] mb-8 tracking-[-0.01em] leading-[1.1]">
                Like a cocoon — calm, warm, and made with care.
              </h1>
              <p className="text-xl md:text-2xl text-cocoon-fog leading-relaxed max-w-3xl mx-auto">
                Coconnette is French for "little cocoon." We create stays that wrap you in
                comfort, and manage properties with the same attention we&apos;d want for our own
                homes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2) Story Section — The Origin of Coconnette */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-[1240px]">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Image */}
              <motion.div
                {...fadeIn}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                  alt="Warm interior with natural light"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Right: Text */}
              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal tracking-[-0.01em]">
                  The Origin of Coconnette
                </h2>
                <div className="space-y-4 text-lg text-[#6B6B6B] leading-relaxed">
                  <p>
                    It started with a simple question: <em>What if short-term stays felt less like
                    transactions and more like homecomings?</em>
                  </p>
                  <p>
                    We were tired of sterile rentals and overwhelmed hosts. So we built Coconnette
                    — a bridge between boutique hospitality and residential warmth.
                  </p>
                  <p>
                    Each property is staged with intention. Hotel-grade linens, daylight
                    photography, and a quiet confidence that says: <em>you&apos;re taken care of here.</em>
                  </p>
                  <p>
                    For owners, we remove the noise. No guesswork, no burnout — just professional
                    management that protects your investment and respects your space.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3) Philosophy Section — Our Values */}
        <section className="py-16 md:py-24 bg-cocoon-porcelain relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
              }}
            />
          </div>

          <div className="container-custom max-w-[1240px] relative z-10">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                Our Values
              </h2>
              <p className="text-lg text-cocoon-fog max-w-2xl mx-auto">
                Three principles guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                >
                  <div className="w-12 h-12 rounded-full bg-cocoon-sage/10 flex items-center justify-center mb-6 text-cocoon-sage">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-cocoon-fog leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Behind the Brand — Team / Founder */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-6 tracking-[-0.01em]">
                Behind the Brand
              </h2>
              <p className="text-lg text-cocoon-fog leading-relaxed">
                Coconnette was founded by a team of hospitality lovers, design nerds, and former
                burnt-out hosts. We believe in doing one thing exceptionally well: creating stays
                that feel human.
              </p>
            </motion.div>

            {/* Founder card */}
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="max-w-3xl mx-auto bg-cocoon-sand/30 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-full bg-cocoon-sage/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
                    alt="Founder portrait"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-semibold text-cocoon-charcoal mb-2">
                    Diane Lesly Pemezi
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-cocoon-sage mb-4">
                    Founder & Chief Host
                  </p>
                  <p className="text-cocoon-fog leading-relaxed">
                    &ldquo;I started managing my own rental in Montreal and quickly realized how broken
                    the process was. Coconnette is my answer: hospitality with soul, operations with
                    clarity, and properties that people actually want to return to.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5) Experience Grid — What We Create */}
        <section className="py-16 md:py-24 bg-cocoon-porcelain">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                What We Create
              </h2>
              <p className="text-lg text-cocoon-fog max-w-2xl mx-auto">
                Coconnette serves three communities with equal care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 bg-white">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-3">
                        {experience.title}
                      </h3>
                      <p className="text-cocoon-fog leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6) Call-to-Action Banner */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div
              {...fadeIn}
              className="bg-[#E8DCC9] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
                  }}
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                  Ready to experience the difference?
                </h2>
                <p className="text-lg text-cocoon-fog mb-8 max-w-2xl mx-auto">
                  Browse curated stays or learn how we can manage your property with care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/stays">
                    <Button variant="primary" size="lg">
                      Explore stays
                    </Button>
                  </Link>
                  <Link href="/owners">
                    <Button variant="secondary" size="lg">
                      For owners
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
