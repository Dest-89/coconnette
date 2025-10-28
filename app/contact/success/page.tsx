'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ContactSuccess() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main className="relative scroll-smooth min-h-screen">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8DCC9]/30 via-[#F7F4EF] to-[#F7F4EF] -z-10" />

        {/* Confetti/sparkles effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  y: -20,
                  x: Math.random() * window.innerWidth,
                }}
                animate={{
                  opacity: 0,
                  y: window.innerHeight + 100,
                  x: Math.random() * window.innerWidth,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: 'easeOut',
                  delay: Math.random() * 0.5,
                }}
                className="absolute w-2 h-2 bg-cocoon-sage rounded-full"
                style={{
                  boxShadow: '0 0 8px rgba(111, 168, 144, 0.6)',
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-xl mx-auto text-center">
            {/* Animated checkmark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2,
              }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-cocoon-sage/10 flex items-center justify-center"
            >
              <motion.svg
                className="w-10 h-10 text-cocoon-sage"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-6 tracking-[-0.01em] leading-[1.2]"
            >
              Merci ! We&apos;ve received your message.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl text-cocoon-fog leading-relaxed mb-10"
            >
              Our team will be in touch shortly. While you wait, explore our curated stays or
              learn about owner services.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/stays">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Explore stays
                </Button>
              </Link>
              <Link href="/owners">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  For owners
                </Button>
              </Link>
            </motion.div>

            {/* Return home link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
              className="mt-8"
            >
              <Link
                href="/"
                className="text-sm text-cocoon-sage hover:text-cocoon-charcoal font-medium transition-colors underline underline-offset-2"
              >
                Return to homepage →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
