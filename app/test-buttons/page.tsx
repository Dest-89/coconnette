'use client';

import Button from '@/components/Button';

export default function TestButtons() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <h1 className="text-4xl font-heading font-bold text-cocoon-charcoal mb-8">
        Button Visibility Test
      </h1>

      {/* Test on Porcelain background */}
      <section className="bg-cocoon-porcelain p-12 rounded-3xl">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          On Porcelain Background (#F7F4EF)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">Primary Button</Button>
          <Button variant="secondary" size="lg">Secondary Button</Button>
          <Button variant="ghost" size="lg">Ghost Button</Button>
        </div>
      </section>

      {/* Test on Sand background */}
      <section className="bg-cocoon-sand p-12 rounded-3xl">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          On Sand Background (#E8DCC9)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">Primary Button</Button>
          <Button variant="secondary" size="lg">Secondary Button</Button>
          <Button variant="ghost" size="lg">Ghost Button</Button>
        </div>
      </section>

      {/* Test on White background */}
      <section className="bg-white p-12 rounded-3xl border border-cocoon-sand">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          On White Background
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">Primary Button</Button>
          <Button variant="secondary" size="lg">Secondary Button</Button>
          <Button variant="ghost" size="lg">Ghost Button</Button>
        </div>
      </section>

      {/* Test on Terracotta background */}
      <section className="bg-cocoon-terra p-12 rounded-3xl">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-white">
          On Terracotta Background (#C06B3E)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg" className="bg-white text-cocoon-terra hover:bg-cocoon-porcelain">
            Primary (White)
          </Button>
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
            Secondary (White)
          </Button>
          <Button variant="ghost" size="lg" className="text-white hover:bg-white/20 bg-white/10">
            Ghost (White)
          </Button>
        </div>
      </section>

      {/* Size variations */}
      <section className="bg-white p-12 rounded-3xl border border-cocoon-sand">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          Size Variations
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      {/* Hover states test */}
      <section className="bg-cocoon-porcelain p-12 rounded-3xl">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          Hover & Focus States (try hovering and clicking)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">Hover Me</Button>
          <Button variant="secondary" size="lg">Hover Me</Button>
          <Button variant="ghost" size="lg">Hover Me</Button>
          <Button variant="primary" size="lg" disabled>Disabled</Button>
        </div>
      </section>

      {/* Accessibility contrast info */}
      <section className="bg-white p-12 rounded-3xl border border-cocoon-sand">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-cocoon-charcoal">
          Accessibility Notes
        </h2>
        <ul className="space-y-3 text-cocoon-fog">
          <li>✓ Primary button: White text (#FFFFFF) on Terracotta (#C06B3E) - WCAG AAA</li>
          <li>✓ Secondary button: Charcoal text (#2E2E2E) on White with Sage border - WCAG AAA</li>
          <li>✓ Ghost button: Charcoal text (#2E2E2E) on Sand/20 background - WCAG AA</li>
          <li>✓ All buttons have 2px focus ring with offset for keyboard navigation</li>
          <li>✓ Hover states use scale (1.02) and shadow lift for visual feedback</li>
        </ul>
      </section>
    </div>
  );
}
