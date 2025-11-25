import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#020617] py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d7ba8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">#1 Performance Marketing Agency in Noida</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Performance Marketing in <span className="text-white">Noida</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Drive Results with Data-Driven Campaigns
                </span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                  ROI-Focused | Data-Driven | Result-Oriented
                </p>
                <div className="h-1 w-16 bg-gradient-to-l from-primary to-transparent rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Transform your business with performance marketing strategies that deliver measurable ROI. We specialize in data-driven campaigns, conversion optimization, and performance-based advertising tailored for your growth in Noida.
              </p>
              
              {/* Mini Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl">
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-1">500+</div>
                  <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Successful Campaigns</div>
                </div>
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-1">300%</div>
                  <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Average ROI Growth</div>
                </div>
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-1">200+</div>
                  <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Clients</div>
                </div>
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-1">5+</div>
                  <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Years of Excellence</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Get Free Consultation
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/service"
                  className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-[#020617] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:border-white"
                >
                  <span className="flex items-center gap-2">
                    Explore Services
                    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-[#1d7ba8] rounded-full blur-3xl opacity-20"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-2 border border-primary/20">
                  <Image
                    src="/hero.webg.webp"
                    alt="Performance Marketing Services"
                    width={600}
                    height={600}
                    className="relative rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-2xl p-4 shadow-2xl shadow-primary/50 animate-bounce">
                  <div className="text-2xl font-bold text-white">🎯</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#1d7ba8] to-primary rounded-2xl p-4 shadow-2xl shadow-primary/50 animate-bounce delay-300">
                  <div className="text-2xl font-bold text-white">📈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Performance Marketing Services</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable results and accelerate your business growth
            </p>
          </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#020617] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven Approach</h3>
                <p className="text-gray-300">
                  Every decision backed by analytics and real-time performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                <p className="text-gray-300">
                  Clear, comprehensive reports showing exactly where your budget goes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Focused</h3>
                <p className="text-gray-300">
                  We optimize campaigns for maximum return on your investment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with years of experience in performance marketing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-300">
                  Tailored strategies that align with your unique business goals
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">
                  Dedicated support team always available to address your concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
