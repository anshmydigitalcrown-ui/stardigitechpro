import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STAR DIGITECH PRO | Digital Marketing Agency in Noida",
  description: "Leading digital marketing agency in Noida offering ROI-focused marketing solutions, SEO, PPC, social media marketing, and more.",
  keywords: "digital marketing Noida, SEO services, PPC management, social media marketing, STAR DIGITECH PRO",
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
    title: 'STAR DIGITECH PRO | Digital Marketing Agency in Noida',
    description: 'Leading digital marketing agency in Noida offering ROI-focused marketing solutions, SEO, PPC, social media marketing, and more.',
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
    title: 'STAR DIGITECH PRO | Digital Marketing Agency in Noida',
    description: 'Leading digital marketing agency in Noida offering ROI-focused marketing solutions, SEO, PPC, social media marketing, and more.',
    images: ['/logo.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app',
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
        <link rel="icon" href="/logo.jpg" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
