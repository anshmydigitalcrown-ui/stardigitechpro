import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stardigitechpro.vercel.app'),
  title: "STAR DIGITECH PRO | Performance Marketing in Delhi | Digital Marketing Agency",
  description: "Leading performance marketing agency in Delhi offering ROI-focused marketing solutions, data-driven campaigns, PPC management, SEO, and performance-based advertising strategies.",
  keywords: "performance marketing Delhi, performance marketing agency, digital marketing Delhi, PPC management Delhi, ROI-focused marketing, conversion optimization, performance advertising, SEO services Delhi, STAR DIGITECH PRO",
  authors: [{ name: "STAR DIGITECH PRO" }],
  creator: "STAR DIGITECH PRO",
  publisher: "STAR DIGITECH PRO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://stardigitechpro.vercel.app',
    title: 'STAR DIGITECH PRO | Performance Marketing in Delhi',
    description: 'Leading performance marketing agency in Delhi offering ROI-focused marketing solutions, data-driven campaigns, and performance-based advertising strategies.',
    siteName: 'STAR DIGITECH PRO',
    images: [{
      url: '/logo.jpg',
      width: 1200,
      height: 630,
      alt: 'STAR DIGITECH PRO Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STAR DIGITECH PRO | Performance Marketing in Delhi',
    description: 'Leading performance marketing agency in Delhi offering ROI-focused marketing solutions, data-driven campaigns, and performance-based advertising strategies.',
    images: ['/logo.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1d7ba8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'STAR DIGITECH PRO',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
              url: 'https://stardigitechpro.vercel.app',
              logo: 'https://stardigitechpro.vercel.app/logo.jpg',
              description: 'Leading performance marketing agency in Delhi offering ROI-focused marketing solutions',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Connaught Place',
                addressLocality: 'Delhi',
                addressRegion: 'DL',
                postalCode: '110001',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-XXX-XXX-XXXX',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi']
              },
              sameAs: [
                'https://stardigitechpro.vercel.app'
              ]
            })
          }}
        />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://stardigitechpro.vercel.app/#organization',
              name: 'STAR DIGITECH PRO',
              image: 'https://stardigitechpro.vercel.app/logo.jpg',
              description: 'Premier performance marketing agency in Delhi specializing in data-driven digital marketing, PPC management, SEO, and conversion optimization',
              url: 'https://stardigitechpro.vercel.app',
              telephone: '+91-XXX-XXX-XXXX',
              priceRange: '₹₹',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Connaught Place',
                addressLocality: 'Delhi',
                addressRegion: 'DL',
                postalCode: '110001',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.6315,
                longitude: 77.2167
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '16:00'
                }
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '150'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
