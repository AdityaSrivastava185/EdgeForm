The page design is inspired by - [Cloudflare](https://www.cloudflare.com/solutions/frontends/)

Credit -  [Cloudflare](https://www.cloudflare.com/solutions/frontends/)

# Edgeform Landing Page

A modern, responsive design engineering study for Edgeform - a frontend infrastructure platform built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Overview

This project is a production-ready landing page showcasing Edgeform's frontend infrastructure capabilities. It features a clean, modern design with interactive components, responsive layouts, and optimized performance.

### Live Demo

The landing page includes:
- **Hero Section**: Main value proposition with call-to-action
- **Features Section**: Key capabilities and benefits
- **Frameworks Section**: Supported frontend frameworks
- **Experience Section**: Platform performance metrics
- **All Products Section**: Complete product catalog
- **Footer**: Navigation, CTA, and company information

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.3.5 | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Utility for constructing class names |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.7.0 | Merge Tailwind CSS classes |

## Project Structure

```
 design01/
 ├─ app/
 │  ├─ (root)/
 │  │  └─ page.tsx           # Main landing page
 │  ├─ globals.css          # Global styles with Tailwind
 │  └─ layout.tsx           # Root layout with fonts
 ├─ (components)/
 │  ├─ components/
 │  │  ├─ (Header)/Header/Navbar.tsx
 │  │  ├─ (Footer)/
 │  │  │  ├─ Footer.tsx
 │  │  │  ├─ FooterLists.tsx
 │  │  │  ├─ Cta.tsx
 │  │  │  └─ FooterInstructions.tsx
 │  │  └─ (main)/
 │  │     ├─ Hero/
 │  │     │  ├─ Hero.tsx
 │  │     │  └─ FrontendBenefits.tsx
 │  │     ├─ FeaturesSection/
 │  │     │  ├─ Features.tsx
 │  │     │  ├─ FeaturesGridCards.tsx
 │  │     │  └─ FeatureHeader.tsx
 │  │     ├─ FrameworksSection/
 │  │     │  ├─ Framework.tsx
 │  │     │  ├─ FrameworkGrid.tsx
 │  │     │  └─ FrameworkHeader.tsx
 │  │     ├─ Experience/
 │  │     │  ├─ Experience.tsx
 │  │     │  └─ ExperienceReview.tsx
 │  │     └─ AllProducts/
 │  │        ├─ AllProducts.tsx
 │  │        ├─ AllProductsGridCards.tsx
 │  │        ├─ AllProductsHeader.tsx
 │  │        └─ ProductCatergory.tsx
 │  └─ (utility)/utility/
 │     ├─ Border.tsx
 │     ├─ VerticalBorder.tsx
 │     ├─ Pattern.tsx
 │     ├─ SectionHeader.tsx
 │     ├─ GridCards.tsx
 │     └─ HeroImage.tsx
 ├─ images/
 │  └─ FrontendBadge.tsx      # SVG component for frontend badge
 ├─ lib/
 │  └─ utils.ts              # Utility functions (cn for class merging)
 ├─ public/
 │  ├─ file.svg
 │  ├─ globe.svg
 │  ├─ hero-image.png
 │  ├─ hero-poster.avif
 │  ├─ next.svg
 │  ├─ vercel.svg
 │  └─ window.svg
 ├─ next.config.ts           # Next.js configuration
 ├─ tsconfig.json           # TypeScript configuration
 ├─ tailwind.config.js       # Tailwind CSS configuration
 ├─ postcss.config.mjs       # PostCSS configuration
 ├─ eslint.config.mjs        # ESLint configuration
 ├─ package.json
 └─ README.md
```

## Features

### Design System
- **Dark Theme**: Custom dark color scheme with `#161414` background
- **Typography**: Familjen Grotesk, Geist, and Geist Mono fonts
- **Responsive Design**: Fully responsive from mobile to desktop
- **Custom Patterns**: Decorative background patterns
- **Border Designs**: Dashed borders with accent colors (#ff5e1f)

### Interactive Components
- **Animated Navbar**: Hover effects with dynamic underline positioning
- **Hover States**: Interactive feedback on all clickable elements
- **Responsive Navigation**: Mobile-friendly menu (desktop-focused in current implementation)

### Performance Optimizations
- **Next.js 16**: Latest features and optimizations
- **Static Generation**: Fast page loads with SSG
- **Optimized Images**: AVIF and PNG formats for hero images
- **CSS-in-JS**: Tailwind CSS v4 for minimal CSS bundle

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd design01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

## Configuration

### Next.js Configuration

The project uses a custom Next.js configuration with TypeScript error ignoring enabled for development:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
};

export default nextConfig;
```

### TypeScript Configuration

- Path aliases: `@/*` maps to `./*`
- Strict mode enabled
- ES2017 target with ESNext module resolution

### Tailwind CSS Configuration

Uses Tailwind CSS v4 with the new `@import` syntax in globals.css:

```css
@import "tailwindcss";

:root {
  --background: #161414;
  --foreground: #ededed;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

## Styling Conventions

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#161414` | Page background |
| Foreground | `#ededed` | Text color |
| Accent | `#ff5e1f` | Primary brand color |
| Accent Light | `#f0e3de` | Secondary accents |
| Border | `#2f2f2f` | UI borders |

### Custom Classes

The project uses custom utility classes defined in `globals.css`:

- `.container`: Max width container with responsive padding
- `.inner-container`: Vertical padding utility

### Class Merging

Use the `cn()` utility function from `lib/utils.ts` to conditionally merge Tailwind classes:

```typescript
import { cn } from "@/lib/utils";

const className = cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "disabled-class"
);
```

## Component Architecture

### Utility Components

Reusable UI elements in `(components)/(utility)/utility/`:

- **Border.tsx**: Horizontal border component
- **VerticalBorder.tsx**: Vertical border with styling
- **Pattern.tsx**: Decorative background pattern
- **SectionHeader.tsx**: Section title and description
- **GridCards.tsx**: Card grid layout
- **HeroImage.tsx**: Hero section image component

### Main Components

Page sections in `(components)/components/(main)/`:

- **Hero**: Main hero section with value proposition
- **FeaturesSection**: Platform features showcase
- **FrameworksSection**: Supported frameworks grid
- **Experience**: Performance metrics and reviews
- **AllProducts**: Complete product catalog

### Layout Components

- **Navbar**: Navigation bar with hover effects
- **Footer**: Site footer with multiple sections

## Customization

### Changing Colors

1. Update the CSS variables in `app/globals.css`:
   ```css
   :root {
     --background: #your-color;
     --foreground: #your-color;
   }
   ```

2. Update Tailwind theme in the same file:
   ```css
   @theme inline {
     --color-background: var(--background);
     --color-foreground: var(--foreground);
   }
   ```

### Adding New Fonts

1. Import from `next/font/google` in `app/layout.tsx`
2. Add to the HTML className with CSS variable
3. Update `globals.css` to use the new font

### Adding New Sections

1. Create a new component in `(components)/components/(main)/`
2. Import and add it to `app/(root)/page.tsx`
3. Follow the existing pattern with Border and Pattern components

## Responsive Design

The project uses Tailwind's responsive prefixes:
- Mobile-first approach
- `md:` prefix for medium screens (768px+)
- Custom breakpoints can be added in `globals.css`

Example:
```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Responsive width */}
</div>
```

## Performance Notes

- Images are optimized using Next.js Image component (where applicable)
- SVGs are imported as React components
- CSS is minimal with Tailwind's utility-first approach
- Fonts are loaded with `next/font/google` for optimal performance

Inspiration and Credit - [Cloudflare](https://www.cloudflare.com/solutions/frontends/)

