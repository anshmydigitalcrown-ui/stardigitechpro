import Link from "next/link";

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
      <section className="bg-gradient-to-br from-primary/10 via-slate-800 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive performance marketing solutions designed to accelerate your business growth in Noida and beyond
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* Service 1 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
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

              {/* Service 2 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📈</div>
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

              {/* Service 3 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📱</div>
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

              {/* Service 4 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">✍️</div>
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
            </div>

            <div className="space-y-6">
              {/* Service 5 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔄</div>
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

              {/* Service 6 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📊</div>
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

              {/* Service 7 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📧</div>
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

              {/* Service 8 */}
              <div className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-700 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛒</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#020617] bg-opacity-95 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a custom marketing strategy that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
