import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://stardigitechpro.vercel.app'),
  title: "About Us | STAR DIGITECH PRO",
  description: "Learn about our mission, values, and team dedicated to delivering exceptional digital marketing results in Noida.",
  openGraph: {
    title: "About Us | STAR DIGITECH PRO",
    description: "Learn about our mission, values, and team dedicated to delivering exceptional digital marketing results in Noida.",
    url: '/about',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
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
            areaServed: 'Noida, India',
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
              About STAR DIGITECH PRO
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your trusted performance marketing partner in Noida, dedicated to transforming businesses through data-driven strategies and measurable results
            </p>
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
                  Leading Digital Marketing Agency in Noida
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Your Trusted Partner<br />for Digital Growth
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  STAR DIGITECH PRO is a premier performance marketing agency based in Noida, specializing in data-driven digital marketing solutions. With over 5 years of industry experience and 500+ successful campaigns, we've helped businesses across various sectors achieve remarkable growth.
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1d7ba8] text-sm uppercase tracking-wider font-semibold mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common Questions About Us</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Everything you need to know about working with STAR DIGITECH PRO
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">Who is STAR DIGITECH PRO?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  We are a premier performance marketing agency based in Noida with over 5 years of experience. We specialize in data-driven digital marketing strategies that deliver measurable results and ROI for businesses of all sizes.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">What makes you different from other agencies?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  Our focus on data-driven results, transparent reporting, and personalized strategies sets us apart. With 500+ successful campaigns and a proven track record in Noida's market, we deliver measurable ROI, not just promises.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">What industries do you serve?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  We work with businesses across various industries including e-commerce, real estate, healthcare, education, technology, and professional services. Our strategies are customized to fit each industry's unique challenges and opportunities.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">Do you work with small businesses?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our flexible pricing models and scalable strategies ensure that every business can benefit from professional digital marketing services.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">How do you ensure transparency?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  We provide detailed monthly reports, real-time dashboards, and regular performance reviews. You'll have complete visibility into campaign metrics, budget allocation, and ROI. Your dedicated account manager is always available for questions and updates.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-[#1d7ba8]/50 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/10 rounded-lg flex items-center justify-center border border-[#1d7ba8]/30">
                    <svg className="w-5 h-5 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="flex-1">How can I get started?</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed ml-11">
                  Getting started is easy! Contact us through our website, WhatsApp, or phone for a free consultation. We'll discuss your business goals, analyze your current marketing efforts, and create a customized strategy tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d7ba8] to-[#0f5a7a] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#1d7ba8]/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
