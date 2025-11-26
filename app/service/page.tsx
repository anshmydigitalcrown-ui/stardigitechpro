import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://stardigitechpro.vercel.app'),
  title: "Our Services | STAR DIGITECH PRO",
  description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
  openGraph: {
    title: "Our Services | STAR DIGITECH PRO",
    description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
    url: '/service',
    type: 'website',
  },
  alternates: {
    canonical: '/service',
  },
};

export default function ServicePage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Digital Marketing Services',
            provider: {
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
            },
            areaServed: 'Delhi, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Digital Marketing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'PPC Management',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Optimization',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Social Media Marketing',
                  },
                },
              ],
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#020617] py-20 md:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d7ba8] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Performance Marketing Services In Delhi
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to drive measurable results and accelerate your business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Performance Marketing Services
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable results and accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - PPC Management */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/PPC Management.webp.webp"
                  alt="PPC Management"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">PPC Management</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Strategic paid advertising campaigns to drive qualified traffic and maximize conversions
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 2 - SEO Optimization */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/SEO Optimization.webp.webp"
                  alt="SEO Optimization"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Boost organic rankings with proven SEO strategies that increase visibility and traffic
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 3 - Social Media Marketing */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Social Media Marketing.webp.webp"
                  alt="Social Media Marketing"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Engage your audience and build brand loyalty across all social media platforms
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 4 - Content Marketing */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Content Marketing.webp.webp"
                  alt="Content Marketing"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Create compelling content that resonates with your audience and drives conversions
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 5 - Email Marketing */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Email Marketing.webp.webp"
                  alt="Email Marketing"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Nurture leads and maintain customer relationships with targeted email campaigns
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 6 - Analytics & Reporting */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Analytics & Reporting.webp.webp"
                  alt="Analytics & Reporting"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics & Reporting</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Make informed decisions with comprehensive analytics and transparent reporting
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 7 - Conversion Rate Optimization */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Conversion Rate Optimization.webp.webp"
                  alt="Conversion Rate Optimization"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Conversion Rate Optimization</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Turn more visitors into customers with data-driven CRO strategies
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 8 - E-commerce Marketing */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/E-commerce Marketing.webp.webp"
                  alt="E-commerce Marketing"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-commerce Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Boost your online store's performance with specialized e-commerce strategies
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 9 - Video Marketing */}
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-full mb-4 rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
                <Image
                  src="/service/Video Marketing.webp.webp"
                  alt="Video Marketing"
                  width={400}
                  height={400}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Video Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Engage audiences with powerful video content across YouTube, social media, and your website
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Trusted Partner Section */}
      <section className="py-20 bg-[#020617] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                  Leading Digital Marketing Agency in Delhi
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Your Trusted Partner<br />for Digital Growth
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  STAR DIGITECH PRO is a premier performance marketing agency based in Delhi, specializing in data-driven digital marketing solutions. With over 5 years of industry experience and 500+ successful campaigns, we've helped businesses across various sectors achieve remarkable growth.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our team of certified digital marketing experts combines creativity with analytics to deliver measurable results. We don't just run campaigns – we build long-term partnerships focused on sustainable growth and maximum ROI.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Successful Campaigns</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <div className="text-4xl font-bold text-white mb-2">300%</div>
                  <div className="text-gray-400 text-sm">Average ROI Growth</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1d7ba8] text-white font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="flex-1 space-y-6">
              {/* Performance-Focused */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center border border-red-500/30">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Performance-Focused</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We focus on metrics that matter – conversions, leads, and revenue growth. Every campaign is optimized for maximum performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovative Solutions */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Innovative Solutions</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Stay ahead with cutting-edge marketing strategies, latest tools, and innovative approaches tailored to your industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transparent Reporting */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Get complete visibility into your campaigns with detailed reports, real-time dashboards, and regular performance reviews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Support */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Work with a dedicated account manager who understands your business and is committed to your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data-Driven Approach */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Data-Driven Approach</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every decision backed by analytics and real-time performance metrics
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Reporting */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Transparent Reporting</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Clear, comprehensive reports showing exactly where your budget goes
                  </p>
                </div>
              </div>
            </div>

            {/* ROI Focused */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">ROI Focused</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We optimize campaigns for maximum return on your investment
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Team */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Certified professionals with years of experience in performance marketing
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tailored strategies that align with your unique business goals
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dedicated support team always available to address your concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why STAR DIGITECH PRO is Your Best Choice Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why STAR DIGITECH PRO is Your Best Choice
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              In today's competitive digital landscape, choosing the right marketing partner can make all the difference between success and mediocrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Proven Track Record */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Proven Track Record</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At STAR DIGITECH PRO, we don't just promise results—we deliver them. With years of experience managing campaigns across diverse industries, we've helped hundreds of businesses achieve their digital marketing goals. Our portfolio speaks for itself, showcasing consistent ROI improvements, increased conversion rates, and sustainable growth for our clients. We combine cutting-edge strategies with time-tested methodologies to ensure your success.
              </p>
            </div>

            {/* Expert Team */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Expert Team</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises certified professionals with expertise across all major digital marketing platforms. From Google Ads specialists to SEO experts, content strategists to conversion optimization analysts—we have the talent and knowledge to handle every aspect of your digital presence. We invest continuously in training and certifications to stay ahead of industry trends and algorithm changes.
              </p>
            </div>

            {/* Data-Driven Approach */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Data-Driven Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We believe in the power of data. Every decision we make is backed by comprehensive analytics, market research, and performance metrics. Our team uses advanced tools and technologies to track, measure, and optimize every aspect of your campaigns. From A/B testing to predictive analytics, we leverage data to maximize your ROI and ensure every marketing dollar is spent wisely.
              </p>
            </div>

            {/* Transparent Partnership */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Transparent Partnership</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We believe in building lasting relationships based on trust and transparency. You'll receive detailed reports, regular updates, and direct access to your account manager. We don't hide behind jargon—we explain everything in clear terms so you understand exactly how your campaigns are performing and where your investment is going. Your success is our success, and we're committed to being your trusted partner in growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f1e] to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border-2 border-primary/50 rounded-full flex items-center justify-center text-3xl font-bold mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">Discovery</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We analyze your business, goals, and target audience to create a customized strategy
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border-2 border-primary/50 rounded-full flex items-center justify-center text-3xl font-bold mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">Strategy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Develop comprehensive marketing plans with clear KPIs and timelines
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border-2 border-primary/50 rounded-full flex items-center justify-center text-3xl font-bold mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">Execution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Launch and manage campaigns with continuous monitoring and optimization
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border-2 border-primary/50 rounded-full flex items-center justify-center text-3xl font-bold mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">Reporting</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Provide transparent reports and data-driven insights for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Partner with a team that delivers real results through proven strategies and dedicated support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-[#1d7ba8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1d7ba8]/20 hover:-translate-y-1">
              <div className="bg-[#1d7ba8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1d7ba8]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data-Driven Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                Every decision backed by analytics and real-time insights. We don't guess—we measure, analyze, and optimize for maximum ROI.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-[#1d7ba8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1d7ba8]/20 hover:-translate-y-1">
              <div className="bg-[#1d7ba8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1d7ba8]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
              <p className="text-gray-400 leading-relaxed">
                100+ successful campaigns across diverse industries. Our portfolio speaks volumes—delivering consistent growth and exceeding targets.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-[#1d7ba8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1d7ba8]/20 hover:-translate-y-1">
              <div className="bg-[#1d7ba8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1d7ba8]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-400 leading-relaxed">
                Certified professionals with years of experience in SEO, PPC, social media, and content marketing. Your success is our expertise.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-[#1d7ba8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1d7ba8]/20 hover:-translate-y-1">
              <div className="bg-[#1d7ba8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1d7ba8]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Round-the-clock availability for your campaigns. Whether it's an urgent update or a quick question, we're always here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Results-Driven */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-red-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Results-Driven</h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus on delivering measurable outcomes that directly impact your bottom line
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-yellow-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Transparency</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clear communication and honest reporting in everything we do
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Staying ahead of digital trends to give our clients a competitive edge
                </p>
              </div>
            </div>

            {/* Excellence */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-900/40 to-amber-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-amber-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Committed to delivering the highest quality in every project we undertake
                </p>
              </div>
            </div>

            {/* Data-First */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-purple-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Data-First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every decision is backed by solid data and actionable insights
                </p>
              </div>
            </div>

            {/* Partnership */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-900/40 to-rose-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-rose-700/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Partnership</h3>
                <p className="text-gray-300 leading-relaxed">
                  We grow when you grow—your success is our primary goal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Digital Marketing Services in Delhi
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted partner for results-driven digital marketing strategies that accelerate business growth and maximize ROI
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Transform Your Business with Expert Digital Marketing Solutions</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In today's competitive digital landscape, businesses need more than just an online presence—they need a strategic, data-driven approach to digital marketing that delivers measurable results. At STAR DIGITECH PRO, we offer a comprehensive suite of digital marketing services designed to help businesses of all sizes achieve their growth objectives, increase brand visibility, and maximize return on investment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our team of certified digital marketing specialists brings years of hands-on experience across diverse industries, combining creative excellence with analytical precision to create campaigns that don't just generate traffic—they generate qualified leads, conversions, and sustainable business growth. Whether you're a startup looking to establish your digital footprint or an established enterprise seeking to scale your online operations, we have the expertise, tools, and proven strategies to help you succeed.
                </p>
              </div>

              {/* PPC Services */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Pay-Per-Click (PPC) Advertising Excellence</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our PPC management services are designed to deliver immediate visibility and drive qualified traffic to your website. We specialize in creating and managing high-performance campaigns across Google Ads, Bing Ads, and social media advertising platforms including Facebook, Instagram, LinkedIn, and Twitter. Our comprehensive PPC approach includes detailed keyword research and selection, competitor analysis, compelling ad copywriting, strategic bid management, and continuous A/B testing to optimize performance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We understand that every click represents an investment, which is why we focus relentlessly on improving quality scores, reducing cost-per-click, and maximizing conversion rates. Our team creates targeted campaigns that reach your ideal customers at the right moment in their buying journey, ensuring that your advertising budget delivers maximum impact. With transparent reporting and regular optimization, we continuously refine your campaigns to improve ROI and drive sustainable growth.
                </p>
              </div>

              {/* SEO Services */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Search Engine Optimization (SEO) for Long-Term Success</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SEO remains one of the most powerful and cost-effective digital marketing strategies for building sustainable online visibility. Our comprehensive SEO services encompass technical website optimization, on-page SEO, content strategy and creation, link building, local SEO, and ongoing performance monitoring. We stay ahead of search engine algorithm updates and implement white-hat techniques that build lasting organic visibility and authority in your industry.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From conducting thorough website audits to identify technical issues, to developing content strategies that target high-value keywords, to building high-quality backlinks that boost domain authority—we handle every aspect of your SEO campaign with meticulous attention to detail. Our local SEO services are particularly valuable for businesses targeting specific geographic areas, helping you dominate local search results and attract customers in your service area.
                </p>
              </div>

              {/* Social Media Marketing */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Social Media Marketing That Drives Engagement</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Social media platforms offer unparalleled opportunities to connect with your target audience, build brand awareness, and drive conversions. Our social media marketing services cover strategy development, content creation, community management, paid social advertising, influencer partnerships, and performance analytics. We create engaging content that resonates with your audience, fosters meaningful interactions, and builds loyal communities around your brand.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether you need to establish a strong presence on Facebook and Instagram, leverage LinkedIn for B2B lead generation, or engage younger audiences on emerging platforms, we develop customized social media strategies that align with your business objectives. Our data-driven approach ensures that every post, campaign, and interaction contributes to your overall marketing goals while building authentic relationships with your customers.
                </p>
              </div>

              {/* Content Marketing */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Content Marketing That Converts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Quality content is the foundation of successful digital marketing. Our content marketing services include content strategy development, blog writing, video production, infographic design, email newsletters, case studies, whitepapers, and more. We create compelling, valuable content that educates your audience, establishes your authority, and guides prospects through the buyer's journey from awareness to conversion.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our content creators work closely with SEO specialists to ensure that every piece of content is optimized for search engines while remaining engaging and valuable to readers. From informative blog posts that attract organic traffic to persuasive landing page copy that converts visitors into customers, we craft content that drives results across all stages of the marketing funnel.
                </p>
              </div>

              {/* Additional Services */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Specialized Services for Maximum Impact</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-2">Conversion Rate Optimization (CRO)</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Driving traffic is only half the battle—converting that traffic into customers is where real value lies. Our CRO services involve comprehensive website analysis, user behavior tracking, A/B testing, landing page optimization, and checkout process refinement. We identify and eliminate friction points in your conversion funnel, implementing data-backed improvements that increase conversion rates and maximize the value of every visitor.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-2">Analytics and Reporting</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Data-driven decision making is at the core of our approach. We provide comprehensive analytics and reporting services that give you complete visibility into campaign performance, user behavior, and ROI. Our custom dashboards and detailed reports help you understand what's working, identify opportunities for improvement, and make informed decisions about your marketing investments.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-2">Email Marketing</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Email remains one of the highest-ROI digital marketing channels. Our email marketing services include list building and segmentation, email template design, automated drip campaigns, newsletter creation, and performance optimization. We create targeted email campaigns that nurture leads, maintain customer relationships, and drive repeat business.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-2">E-commerce Marketing</h4>
                    <p className="text-gray-300 leading-relaxed">
                      For online retailers, we offer specialized e-commerce marketing services including product feed optimization, shopping campaign management, marketplace advertising (Amazon, Flipkart), retargeting strategies, and customer retention programs. Our e-commerce expertise helps online stores increase sales, improve average order value, and build customer loyalty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose STAR DIGITECH PRO for Your Digital Marketing Needs?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With countless digital marketing agencies competing for your business, what sets STAR DIGITECH PRO apart? Our commitment to transparency, results, and partnership. We don't just execute campaigns—we become invested partners in your success, treating your marketing budget as if it were our own. Our team brings certified expertise across all major digital marketing platforms, combined with a proven track record of delivering measurable results for businesses across diverse industries.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Located in Noida, we're perfectly positioned to serve businesses throughout the National Capital Region and across India. Our deep understanding of local markets, combined with global best practices and cutting-edge tools, allows us to create campaigns that resonate with Indian audiences while maintaining international quality standards. Whether you need a single service or a comprehensive digital marketing strategy, we have the expertise, resources, and dedication to help you achieve your business goals and dominate your market online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1d7ba8] text-sm uppercase tracking-wider font-semibold mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Get answers to common questions about our performance marketing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Left Column - 6 FAQs */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">What is performance marketing?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Performance marketing is a data-driven approach where advertisers pay only for specific actions like clicks, leads, or sales. It focuses on measurable results and ROI optimization.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">How long does it take to see results?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Initial results can be seen within 2-4 weeks, but significant improvements typically occur after 3-6 months of consistent optimization and strategy refinement.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">What is your pricing model?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We offer flexible pricing based on your business needs, including monthly retainers, performance-based fees, and project-based pricing. Contact us for a custom quote.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Do you work with small businesses?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yes! We work with businesses of all sizes, from startups to enterprises. Our strategies are tailored to fit your budget and growth objectives.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Which platforms do you manage?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, Twitter, YouTube, and other major advertising platforms based on your target audience.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Can I track campaign performance?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Absolutely! We provide detailed monthly reports, real-time dashboards, and transparent analytics so you can track every metric and KPI that matters to your business.
                </p>
              </div>
            </div>

            {/* Right Column - 6 FAQs */}
            <div className="space-y-6">
              {/* FAQ 7 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">What makes you different from other agencies?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We focus on data-driven results, transparent reporting, and personalized strategies. Our team has proven expertise in Delhi's market with 500+ successful campaigns.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Do you provide SEO services?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yes, we offer comprehensive SEO services including technical audits, on-page optimization, link building, and local SEO to boost your organic visibility.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">What is your contract duration?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We typically recommend 6-12 month contracts for best results, but we also offer flexible month-to-month options. No long-term commitments required.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">How do you measure success?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We measure success through KPIs like conversion rates, cost per acquisition, ROI, click-through rates, and other metrics aligned with your specific business goals.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Do you offer free consultations?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yes! We provide a free initial consultation to understand your business, analyze your current marketing efforts, and propose a tailored strategy.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-[#1d7ba8]/60 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#1d7ba8]/10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1d7ba8] to-[#0f5a7a] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-[#1d7ba8] transition-colors duration-300">Can you help with social media marketing?</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Absolutely! We create and manage engaging social media campaigns across all major platforms to build your brand presence and drive conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
