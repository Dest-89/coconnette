'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import OwnerLeadForm from '@/components/OwnerLeadForm';
import RevenueCTA from '@/components/RevenueCTA';

export default function ForOwners() {
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const benefits = [
    'Professional staging & photos',
    'Dynamic pricing',
    'Guest screening',
    'Hotel-grade cleaning',
    '24/7 support',
    'Transparent reporting',
  ];

  const trustMetrics = [
    {
      icon: (
        <svg className="w-8 h-8 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Avg. 4.8★ guest rating',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
      label: 'Superhost partners',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      label: '<48h first booking after go-live (median)',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
      ),
      label: '75+ owner inquiries annually',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Assess',
      description: 'Walkthrough + revenue estimate',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-.93.806 8.217 8.217 0 01.929 3.545.75.75 0 01-1.5 0 6.717 6.717 0 00-.75-2.906A18.95 18.95 0 013 12.306a.75.75 0 01.37-1.295 18.967 18.967 0 003.387-.834A18.552 18.552 0 017.84 6.7a49.775 49.775 0 00-2.933-.192.75.75 0 01-.728-.732A.75.75 0 014.918 5c.655.004 1.31.026 1.965.066a18.647 18.647 0 01.38-1.735.75.75 0 01.925-.565c.657.187 1.296.41 1.917.67V3a.75.75 0 01.75-.75zm3.207 11.953c.48.481.96.95 1.441 1.407a49.765 49.765 0 01-2.422.64 8.218 8.218 0 00.98-2.047z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400',
    },
    {
      number: 2,
      title: 'Prepare',
      description: 'Staging, hotel-grade clean, pro photography',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400',
    },
    {
      number: 3,
      title: 'Launch',
      description: 'Listing, pricing, guest screening',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400',
    },
    {
      number: 4,
      title: 'Host',
      description: 'Turnovers, messaging, 24/7 support',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400',
    },
    {
      number: 5,
      title: 'Grow',
      description: 'Reporting and optimization',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400',
    },
  ];

  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Pricing engine (dynamic)',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Calendar & availability management',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Guest screening & comms',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Hotel-grade cleaning & linens',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Maintenance coordination',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cocoon-sage" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>
      ),
      label: 'Owner reporting & payouts',
    },
  ];

  const revenueStats = [
    { value: '+18–35%', label: 'ADR uplift after staging & pro photos' },
    { value: '+12–20%', label: 'Occupancy optimization' },
    { value: '<24h', label: 'Avg response to owner queries' },
  ];

  const testimonials = [
    {
      quote: 'Coconnette took our flat from fine to fully booked. The photos and guest care are next level.',
      author: 'Anaïs D.',
      location: 'Paris',
    },
    {
      quote: 'Transparent reporting and zero guest drama. I just get paid.',
      author: 'Marc L.',
      location: 'Montreal',
    },
    {
      quote: 'Best decision we made. They handle everything with such care and professionalism.',
      author: 'Sophie R.',
      location: 'Amsterdam',
    },
  ];

  const faqs = [
    {
      question: "What's your fee structure?",
      answer: 'We charge a flat percentage of bookings plus cleaning pass-through. Our fee covers all management, guest support, and operational services. We will provide a detailed breakdown during your consultation.',
    },
    {
      question: 'Who pays for cleaning/linens?',
      answer: 'Guests cover the cleaning fee, which is transparently displayed at booking. Hotel-grade linens are included in our operational services at no additional cost to you.',
    },
    {
      question: 'How do payouts and reporting work?',
      answer: 'You receive monthly payouts with a detailed statement showing all bookings, expenses, and net revenue. Access your owner dashboard anytime for real-time reporting.',
    },
    {
      question: 'Can I block personal dates?',
      answer: 'Absolutely. You have access to an owner calendar where you can block dates for personal use anytime. We recommend providing at least 2 weeks notice when possible.',
    },
    {
      question: 'Is there a contract term?',
      answer: 'Standard agreements are 6–12 months with a flexible opt-out clause. We want you to stay because you are happy, not because you are locked in.',
    },
  ];

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {/* 1) Hero — "Your property, beautifully managed" */}
        <section className="relative bg-[#F7F4EF] overflow-hidden">
          {/* Linen texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
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
              {/* Left: Copy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <p className="text-xs uppercase tracking-widest text-cocoon-fog mb-4 font-body">
                  FOR OWNERS
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-cocoon-charcoal mb-6 tracking-[-0.01em] leading-[1.1]">
                  Your property, beautifully managed
                </h1>
                <p className="text-lg md:text-xl text-[#6B6B6B] mb-8 leading-relaxed">
                  From staging and hotel-grade cleaning to dynamic pricing and guest support—Coconnette handles it with boutique care.
                </p>

                {/* Benefits checklist */}
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index, ease: 'easeOut' }}
                      className="flex items-center gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-cocoon-sage flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-cocoon-charcoal">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <OwnerLeadForm source="hero" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2) Trusted by / Proof strip */}
        <section className="border-y border-[#E8DCC9]/60 py-8 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div
              {...fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center"
            >
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="mb-2">{metric.icon}</div>
                  <p className="text-sm text-cocoon-fog leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-xs text-cocoon-fog text-center mt-6">
              /* Illustrative for design; replace with real data later */
            </p>
          </div>
        </section>

        {/* 3) How it works — simple timeline */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                How it works
              </h2>
              <p className="text-lg text-cocoon-fog max-w-2xl mx-auto">
                From first walkthrough to ongoing optimization, we handle every detail.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-cocoon-sand/60 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: index * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    {/* Image with icon overlay */}
                    <div className="relative w-32 h-32 mb-4">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Icon badge */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-cocoon-sage text-white flex items-center justify-center shadow-lg z-10">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-2 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-cocoon-fog leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4) Before & After — Staging impact */}
        <section className="py-16 md:py-20 bg-cocoon-porcelain">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                The staging difference
              </h2>
              <p className="text-lg text-cocoon-fog max-w-2xl mx-auto">
                Consistent daylight photography and warm styling increase click-through and bookings.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
                    alt="Before staging - basic apartment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-cocoon-charcoal">
                  Before
                </div>
              </div>

              {/* After */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
                    alt="After staging - beautifully styled apartment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-cocoon-sage text-white px-4 py-2 rounded-full text-sm font-medium">
                  After
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5) Revenue & services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                What we handle
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Services grid */}
              <motion.div {...fadeIn}>
                <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-6">
                  Services included
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      {...fadeIn}
                      transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-cocoon-porcelain/50 hover:bg-cocoon-porcelain transition-colors"
                    >
                      <div className="flex-shrink-0">{service.icon}</div>
                      <span className="text-cocoon-charcoal font-medium">{service.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Revenue stats */}
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <h3 className="text-xl font-heading font-semibold text-cocoon-charcoal mb-6">
                  What owners typically see
                </h3>
                <div className="space-y-6">
                  {revenueStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      {...fadeIn}
                      transition={{ ...fadeIn.transition, delay: 0.1 + index * 0.1 }}
                      className="bg-cocoon-sand/40 rounded-2xl p-6"
                    >
                      <p className="text-3xl md:text-4xl font-heading font-semibold text-cocoon-terra mb-2">
                        {stat.value}
                      </p>
                      <p className="text-cocoon-fog">{stat.label}</p>
                    </motion.div>
                  ))}
                  <p className="text-xs text-cocoon-fog italic">
                    Note: Figures are illustrative placeholders; replace with actuals.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6) Testimonials (owner trust) */}
        <section className="py-16 md:py-20 bg-[#E8DCC9]/40 relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
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
                What owners say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-cocoon-sage"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-cocoon-fog leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <p className="text-sm text-cocoon-charcoal font-medium uppercase tracking-wider">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-cocoon-fog">{testimonial.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7) Owner FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-[1240px]">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-cocoon-charcoal mb-4 tracking-[-0.01em]">
                Frequently asked questions
              </h2>
            </motion.div>

            <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-cocoon-sand/60 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cocoon-porcelain/30 transition-colors"
                  >
                    <span className="text-lg font-heading font-medium text-cocoon-charcoal pr-8">
                      {faq.question}
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
                    <div className="px-6 pb-5 text-[15px] text-cocoon-fog leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 8) Bottom CTA banner */}
        <section className="py-16 bg-white">
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
                  Let&apos;s make hosting effortless
                </h2>
                <p className="text-lg text-cocoon-fog mb-8 max-w-2xl mx-auto">
                  Tell us about your place—staging, guests, and payouts handled.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <RevenueCTA
                    variant="primary"
                    size="lg"
                    openModal={true}
                    placementId="owners-hero"
                    icon={true}
                  />
                  <Button variant="secondary" size="lg">
                    Download our owner checklist
                  </Button>
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
