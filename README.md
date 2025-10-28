# Coconnette — Boutique Airbnb Management

A warm, minimalist website for boutique Airbnb rental and property management services.

## Brand Identity

### Design Style
Warm minimalism + boutique hospitality. Airy whitespace, soft edges, subtle textures, gentle micro-interactions. Photography-forward with cozy lifestyle imagery.

### Color Palette

- **Primary (Cocoon Sage)**: `#6FA890`
- **Secondary (Sand)**: `#E8DCC9`
- **Accent (Terracotta)**: `#C06B3E`
- **Neutral Dark (Charcoal)**: `#2E2E2E`
- **Neutral Mid (Fog)**: `#9AA3A7`
- **Neutral Light (Porcelain)**: `#F7F4EF`
- **Success**: `#3BAA74`
- **Warning**: `#E9B949`

### Typography

- **Headings**: Fraunces (serif, soft yet premium)
- **Body/UI**: Inter (sans-serif)
- **Type Scale**: 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56

### UI Shape Language

- **Border Radius**: 14–24px for cards, 14px for fields, 16px for buttons
- **Icons**: Outline style, 1.5px stroke, rounded joins
- **Shadows**: Soft, subtle elevation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme tokens
- **Animations**: Framer Motion
- **Fonts**: Next/font (Fraunces + Inter)

## Project Structure

```
coconnette/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Button.tsx          # Button component (3 variants)
│   ├── Card.tsx            # Card component with image support
│   ├── Badge.tsx           # Badge/pill for status indicators
│   ├── Input.tsx           # Text input field
│   └── Select.tsx          # Select dropdown
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Components

### Button

3 variants: `primary` (terracotta), `secondary` (sage outline), `ghost`

```tsx
<Button variant="primary" size="lg">Check availability</Button>
<Button variant="secondary">Explore stays</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

### Card

Image-first card with optional content

```tsx
<Card image="/path/to/image.jpg" imageAlt="Description">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Badge

Status indicators with 3 variants

```tsx
<Badge variant="success">Available</Badge>
<Badge variant="warning">Limited dates</Badge>
<Badge variant="neutral">Coming soon</Badge>
```

### Input / Select

Form fields with labels and error states

```tsx
<Input label="Email" type="email" fullWidth />
<Select label="Guests" options={[...]} fullWidth />
```

## Page Structure (v1)

- **Home** — Hero, value props, featured stays, how it works, testimonials, CTA
- **Stays** — Property grid with filters (placeholder)
- **Property Detail** — Gallery, amenities, availability widget (placeholder)
- **For Owners** — Service overview, process, lead form (placeholder)
- **About** — Brand story (placeholder)
- **Contact** — Contact form (placeholder)
- **Legal** — Privacy/Terms (placeholder)

## Content Tone

Calm, welcoming, boutique. Short sentences. Sensory words: linen, light, quiet, warm wood.

## Accessibility

- WCAG AA contrast compliance
- Semantic HTML
- Keyboard navigation support
- Focus ring indicators
- Alt text for images (when added)

## Next Steps

1. Add real property images
2. Implement property listing pages
3. Add booking integration with Airbnb API
4. Build property detail pages
5. Create owner dashboard
6. Add real testimonials
7. Implement contact forms with email integration
8. Add property filters and search
9. SEO optimization
10. Performance optimization

---

**Built with care** • Coconnette © 2025
