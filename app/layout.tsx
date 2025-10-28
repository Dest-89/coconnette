'use client';

import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import StickyRevenueBar from '@/components/StickyRevenueBar';

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <title>Coconnette — Boutique Airbnb Management</title>
        <meta name="description" content="Warm, professional property management for discerning hosts and guests" />
      </head>
      <body className="font-body text-cocoon-charcoal bg-cocoon-porcelain antialiased" suppressHydrationWarning>
        {children}
        <StickyRevenueBar />
      </body>
    </html>
  );
}
