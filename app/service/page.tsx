import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services | STAR DIGITECH PRO",
  description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
  openGraph: {
    title: "Our Services | STAR DIGITECH PRO",
    description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
    url: 'https://stardigitechpro.vercel.app/service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app/service',
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
              Let's Grow Your Business Together
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to take your digital marketing to the next level? Contact our team of experts in Noida for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
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

      {/* Process Section */}
      <section className="py-20 bg-[#020617] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">
                We analyze your business, goals, and target audience to create a customized strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">
                Develop comprehensive marketing plans with clear KPIs and timelines
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
              <p className="text-gray-300">
                Launch and manage campaigns with continuous monitoring and optimization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reporting</h3>
              <p className="text-gray-300">
                Provide transparent reports and data-driven insights for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
