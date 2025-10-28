'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {/* 1) Hero Section */}
        <section className="relative bg-[#F7F4EF] overflow-hidden">
          {/* Linen texture overlay */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
              }}
            />
          </div>

          <div className="container-custom max-w-[1240px] relative z-10 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="order-2 md:order-1"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#2E2E2E] mb-6 tracking-[-0.01em] leading-[1.1]">
                  Let&apos;s connect with care.
                </h1>
                <p className="text-lg md:text-xl text-cocoon-fog leading-relaxed">
                  Whether you&apos;re planning a stay or ready to list your property, we&apos;re
                  here to make it simple.
                </p>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] order-1 md:order-2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                  alt="Calm workspace with natural daylight"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2) Contact Form + Sidebar */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main: Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Sidebar: Office Hours & Map */}
              <div className="space-y-8">
                {/* Office hours */}
                <motion.div
                  {...fadeIn}
                  className="bg-cocoon-porcelain rounded-2xl p-6"
                >
                  <h3 className="text-lg font-heading font-semibold text-cocoon-charcoal mb-4">
                    Office hours & coverage
                  </h3>
                  <div className="space-y-3 text-sm text-cocoon-fog">
                    <p className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-cocoon-sage flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-cocoon-charcoal">Monday – Friday:</strong>
                        <br />
                        9 a.m. – 6 p.m. EST
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-cocoon-sage flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-cocoon-charcoal">Properties managed across:</strong>
                        <br />
                        Montreal, Paris, Lisbon, and Copenhagen
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Map placeholder */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.1 }}
                  className="bg-[#E8DCC9]/40 rounded-2xl h-[280px] flex items-center justify-center"
                >
                  <div className="text-center px-6">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-cocoon-sage"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium text-cocoon-charcoal">
                      Coverage area — boutique stays in select cities
                    </p>
                  </div>
                </motion.div>

                {/* Social proof */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.2 }}
                  className="text-center pt-4"
                >
                  <p className="text-sm text-cocoon-fog mb-3">Join our journey on Instagram</p>
                  <a
                    href="https://instagram.com/coconnettehomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cocoon-sage hover:text-cocoon-charcoal font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                    @coconnettehomes
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
