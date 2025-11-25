# Performance Marketing in Noida - Next.js Website

A modern, responsive website for a performance marketing agency based in Noida, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **4 Main Pages:**
  - Home: Hero section with company overview, stats, and services highlight
  - Services: Comprehensive list of digital marketing services
  - About: Company story, mission, values, and team
  - Contact: Contact form with business information

- **Modern Design:**
  - Responsive layout that works on all devices
  - Custom color scheme based on your logo
  - Smooth animations and transitions
  - Clean, professional interface

- **Technologies:**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Optimized images with Next.js Image component

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`:
- Primary: #FF6B35 (Orange)
- Secondary: #2A9D8F (Teal)
- Accent: #F4A261 (Light Orange)
- Dark: #264653 (Dark Blue)

### Logo
Place your logo in the `public` folder as `logo.jpg`

### Content
Update the content in each page:
- `app/page.tsx` - Home page
- `app/service/page.tsx` - Services page
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

### Contact Information
Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## 📁 Project Structure

```
stardigitechpro/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── service/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── logo.jpg
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms
- **Netlify:** Use the build command `npm run build` and publish directory `.next`
- **AWS/DigitalOcean:** Build and serve the `.next` folder with Node.js

## 📝 Notes

- The contact form currently simulates submission. Integrate with your backend API or email service for real functionality.
- Update meta tags in each page for better SEO
- Add your actual contact information (phone, email, address)
- The TypeScript errors shown during development are expected until dependencies are installed

## 🤝 Support

For questions or issues, contact your development team.

## 📄 License

Private - All rights reserved
