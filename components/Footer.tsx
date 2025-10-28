import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const navigation = {
    stays: [
      { name: 'All Properties', href: '/stays' },
      { name: 'By Location', href: '/stays#locations' },
      { name: 'Guest Reviews', href: '/stays#reviews' },
    ],
    owners: [
      { name: 'List Your Property', href: '/for-owners' },
      { name: 'Management Services', href: '/for-owners#services' },
      { name: 'Pricing', href: '/for-owners#pricing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-white border-t border-cocoon-sand/40 mt-20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl text-cocoon-sage font-semibold">
                Coconnette
              </span>
            </Link>
            <p className="mt-4 text-sm text-cocoon-fog leading-relaxed">
              Warm, professional property management for discerning hosts and guests.
            </p>
          </div>

          {/* Stays */}
          <div>
            <h3 className="text-sm font-semibold text-cocoon-charcoal">Stays</h3>
            <ul className="mt-4 space-y-3">
              {navigation.stays.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-cocoon-fog hover:text-cocoon-sage transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="text-sm font-semibold text-cocoon-charcoal">For Owners</h3>
            <ul className="mt-4 space-y-3">
              {navigation.owners.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-cocoon-fog hover:text-cocoon-sage transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-cocoon-charcoal">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-cocoon-fog hover:text-cocoon-sage transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-cocoon-charcoal">Legal</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-cocoon-fog hover:text-cocoon-sage transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-cocoon-sand/40 pt-8">
          <p className="text-sm text-cocoon-fog text-center">
            &copy; {new Date().getFullYear()} Coconnette. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
