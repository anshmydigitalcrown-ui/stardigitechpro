# STAR DIGITECH PRO - AI Coding Agent Instructions

## Project Overview
This is a Next.js 14 marketing website for a performance marketing agency in Noida. Built with TypeScript, Tailwind CSS, and Next.js App Router. The site focuses on SEO optimization, conversion-driven design, and performance marketing services.

## Architecture & Structure

### Core Stack
- **Framework**: Next.js 14 with App Router (not Pages Router)
- **Styling**: Tailwind CSS with custom dark theme (`#020617` base)
- **TypeScript**: Strict mode enabled with path alias `@/*` pointing to root
- **Deployment**: Optimized for Vercel with auto-deployments from `main` branch

### Directory Layout
```
app/                    # Next.js App Router pages
  ├── page.tsx         # Home page (client component with animations)
  ├── layout.tsx       # Root layout with metadata & global components
  ├── globals.css      # Tailwind directives + custom component classes
  ├── service/         # Services overview page
  └── services/        # Individual service detail pages (SEO, PPC, etc.)
components/            # Shared React components
  ├── Header.tsx      # Sticky navigation with mobile menu
  ├── Footer.tsx      # Company info, links, contact details
  └── FloatingButtons.tsx # Fixed WhatsApp/Call buttons (left-bottom)
public/               # Static assets (images use .webp.webp extension pattern)
```

## Development Patterns

### Component Architecture
- **Client Components**: Use `"use client"` directive for interactivity (forms, animations, state)
- **Server Components**: Default for static content (about, service pages)
- **Metadata**: Export `metadata` object in Server Components for SEO (see `app/layout.tsx`, `app/about/page.tsx`)

### Styling Conventions
- **Dark Theme**: Primary background is `#020617` (slate-950), never pure black
- **Custom Classes**: Use Tailwind utilities defined in `globals.css` (`.btn-primary`, `.card`, `.section-title`)
- **Gradients**: Heavy use of `bg-gradient-to-r from-primary via-[#1d7ba8] to-primary` for CTAs
- **Animations**: Pulse effects with `animate-pulse` and custom delays via inline styles
- **Hover Effects**: Scale transforms (`hover:scale-105`), shadow variations, and gradient position shifts

### Color System (Tailwind Config)
```typescript
primary: '#020617' (dark slate - all variants set to same dark tones)
secondary: '#020617' (intentionally same as primary)
accent: '#020617' (monochromatic dark theme)
```
Brand highlight color is `#1d7ba8` (teal-blue) used in gradients.

### Image Handling
- Use Next.js `<Image>` component with explicit width/height
- Images in `public/` have double extensions (`.webp.webp`, `.webg.webp`) - keep this pattern
- Logo path: `/logo.webp.webp`

### SEO & Metadata
- Root metadata in `app/layout.tsx` includes OpenGraph, Twitter cards, robots directives
- Each page exports `metadata` object with title, description, keywords
- Canonical URLs point to `https://stardigitechpro.vercel.app`
- Google verification code placeholder: Update in root layout

### Form Handling
- Contact form (`app/contact/page.tsx`) is client-side with simulated submission
- Uses TypeScript for event typing: `ChangeEvent<HTMLInputElement>`, `FormEvent<HTMLFormElement>`
- No backend integration - displays success message after timeout

### Navigation & Links
- Use `next/link` for internal navigation, never `<a>` for same-site links
- Active route detection via `usePathname()` hook in Header
- Mobile menu toggles with state, slides in from right

## Key Commands

```powershell
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (validates TypeScript, optimizes assets)
npm start        # Serve production build locally
npm run lint     # Next.js ESLint (run before committing)
```

## Common Tasks

### Adding a New Service Page
1. Create folder in `app/services/<service-name>/`
2. Add `page.tsx` with exported `metadata` object
3. Follow pattern from `app/services/seo-optimization/page.tsx`:
   - Dark gradient hero with animated background blobs
   - Service overview section
   - Features grid
   - CTA section linking to `/contact`

### Updating Contact Information
- Header: `components/Header.tsx` (WhatsApp/Call buttons)
- Footer: `components/Footer.tsx` (address, email, phone)
- Floating Buttons: `components/FloatingButtons.tsx`
- Contact Page: `app/contact/page.tsx`
- Default phone: `+919999999999` (placeholder)

### Modifying Colors
- Theme colors: `tailwind.config.ts` (currently monochromatic dark)
- For brand colors, update `from-primary` usages to new hex values
- Gradient accent: Search/replace `#1d7ba8` across components

## Project Conventions

### TypeScript
- No implicit `any` - strict type checking enabled
- Import types explicitly: `import type { Metadata } from "next"`
- Use React types: `FC`, `ReactNode`, `ChangeEvent`, etc.

### Code Style
- Functional components only (no class components)
- Destructure props at function signature
- Use optional chaining and nullish coalescing
- Keep components under 500 lines (split if exceeding)

### Git Workflow
- Main branch deploys automatically to Vercel
- Commit messages reference feature/page modified
- No build artifacts in repo (`.next/` is gitignored)

## Critical Notes

- **Mobile-First**: All components must be responsive (use `md:`, `lg:` breakpoints)
- **Performance**: Large pages (1200+ lines) like `app/page.tsx` are intentional - contain full landing page sections
- **Animations**: Use Tailwind's built-in animations - avoid heavy JS animation libraries
- **Icons**: Inline SVG only (no icon library dependencies)
- **External Links**: WhatsApp (`https://wa.me/...`) and tel links use `target="_blank"` with `rel="noopener noreferrer"`

## References
- Next.js 14 docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Deployment guide: `DEPLOYMENT_GUIDE.md` (Vercel-specific instructions)
- Project structure overview: `README.md`
