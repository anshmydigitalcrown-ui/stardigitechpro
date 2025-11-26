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
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Performance Marketing Services</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable results and accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  href="/services/ppc-management"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
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
                  href="/services/seo-optimization"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
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
                  href="/services/social-media-marketing"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>}
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

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-to-br from-[#020617] via-slate-900 to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm text-white font-medium">Leading Digital Marketing Agency in Noida</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Your Trusted Partner for Digital Growth
                </h2>
                
                <p className="text-white text-lg mb-6 leading-relaxed">
                  STAR DIGITECH PRO is a premier performance marketing agency based in Noida, specializing in data-driven digital marketing solutions. With over 5 years of industry experience and 500+ successful campaigns, we've helped businesses across various sectors achieve remarkable growth.
                </p>
                
                <p className="text-white text-lg mb-8 leading-relaxed">
                  Our team of certified digital marketing experts combines creativity with analytics to deliver measurable results. We don't just run campaigns – we build long-term partnerships focused on sustainable growth and maximum ROI.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-sm text-white">Years of Excellence</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-white">Successful Campaigns</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-sm text-white">Happy Clients</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-2">300%</div>
                    <div className="text-sm text-white">Average ROI Growth</div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Learn More About Us
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Performance-Focused</h3>
                      <p className="text-white text-sm leading-relaxed">
                        We focus on metrics that matter – conversions, leads, and revenue growth. Every campaign is optimized for maximum performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      💡
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Innovative Solutions</h3>
                      <p className="text-white text-sm leading-relaxed">
                        Stay ahead with cutting-edge marketing strategies, latest tools, and innovative approaches tailored to your industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      📊
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                      <p className="text-white text-sm leading-relaxed">
                        Get complete visibility into your campaigns with detailed reports, real-time dashboards, and regular performance reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      🤝
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                      <p className="text-white text-sm leading-relaxed">
                        Work with a dedicated account manager who understands your business and is committed to your success.
                      </p>
                    </div>
                  </div>
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

      {/* Contact Section with Map */}
      <section className="py-20 bg-gradient-to-br from-[#020617] via-slate-900 to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Map */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700 overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129347457!2d77.20902555!3d28.527554449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635764123456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Noida Location"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-lg flex items-center justify-center">
                      <span className="text-xl">📞</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Phone</h3>
                  </div>
                  <p className="text-gray-300">+91 (XXX) XXX-XXXX</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#1d7ba8] rounded-lg flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Email</h3>
                  </div>
                  <p className="text-gray-300">info@stardigitechpro.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="ppc">PPC Management</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="cro">Conversion Rate Optimization</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="email">Email Marketing</option>
                    <option value="ecommerce">E-commerce Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">About STAR DIGITECH PRO</h2>
              <p className="text-white text-lg max-w-3xl mx-auto mt-4">
                Your Trusted Partner for Digital Growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Company Description */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
                  <p className="text-white leading-relaxed mb-4">
                    STAR DIGITECH PRO is a leading performance marketing agency based in Noida, specializing in data-driven digital marketing strategies that deliver measurable results. With over 500+ successful campaigns and a proven track record of 300% average ROI, we help businesses of all sizes achieve their growth objectives.
                  </p>
                  <p className="text-white leading-relaxed">
                    Our team of certified digital marketing experts combines creativity with analytics to craft customized solutions for SEO, PPC, social media marketing, and more. We don't just run campaigns – we build long-term partnerships focused on your success.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white leading-relaxed">
                    To empower businesses with cutting-edge digital marketing strategies that drive growth, maximize ROI, and create lasting impact in the digital landscape. We believe in transparency, innovation, and delivering results that exceed expectations.
                  </p>
                </div>
              </div>

              {/* Right: Key Highlights */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Businesses Trust Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Proven Expertise</h4>
                        <p className="text-white text-sm">5+ years of experience with 500+ successful campaigns across industries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Measurable Results</h4>
                        <p className="text-white text-sm">Average 300% ROI with transparent reporting and real-time analytics</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Dedicated Support</h4>
                        <p className="text-white text-sm">200+ satisfied clients with dedicated account managers and 24/7 support</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Innovation First</h4>
                        <p className="text-white text-sm">Cutting-edge strategies using the latest tools and technologies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                  >
                    Learn More About Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Value 1 - Results-Driven */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Results-Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                We focus on delivering measurable outcomes that directly impact your bottom line
              </p>
            </div>

            {/* Value 2 - Transparency */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparency</h3>
              <p className="text-gray-300 leading-relaxed">
                Clear communication and honest reporting in everything we do
              </p>
            </div>

            {/* Value 3 - Innovation */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Staying ahead of digital trends to give our clients a competitive edge
              </p>
            </div>

            {/* Value 4 - Excellence */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Committed to delivering the highest quality service in every project
              </p>
            </div>

            {/* Value 5 - Data-First */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data-First</h3>
              <p className="text-gray-300 leading-relaxed">
                Every decision backed by analytics and performance metrics
              </p>
            </div>

            {/* Value 6 - Partnership */}
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                We see our clients as partners, invested in their long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose STAR DIGITECH PRO Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-[#020617] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d7ba8]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary/20 to-[#1d7ba8]/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-primary/30">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">
                Why STAR DIGITECH PRO is Your Best Choice
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              In today's competitive digital landscape, choosing the right marketing partner can make all the difference between success and mediocrity.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Proven Track Record</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        At STAR DIGITECH PRO, we don't just promise results—we deliver them. With years of experience managing campaigns across diverse industries, we've helped hundreds of businesses achieve their digital marketing goals. Our portfolio speaks for itself, showcasing consistent ROI improvements, increased conversion rates, and sustainable growth for our clients. We combine cutting-edge strategies with time-tested methodologies to ensure your success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Data-Driven Approach</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        We believe in the power of data. Every decision we make is backed by comprehensive analytics, market research, and performance metrics. Our team uses advanced tools and technologies to track, measure, and optimize every aspect of your campaigns. From A/B testing to predictive analytics, we leverage data to maximize your ROI and ensure every marketing dollar is spent wisely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Expert Team</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Our team comprises certified professionals with expertise across all major digital marketing platforms. From Google Ads specialists to SEO experts, content strategists to conversion optimization analysts—we have the talent and knowledge to handle every aspect of your digital presence. We invest continuously in training and certifications to stay ahead of industry trends and algorithm changes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Transparent Partnership</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        We believe in building lasting relationships based on trust and transparency. You'll receive detailed reports, regular updates, and direct access to your account manager. We don't hide behind jargon—we explain everything in clear terms so you understand exactly how your campaigns are performing and where your investment is going. Your success is our success, and we're committed to being your trusted partner in growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats/Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <p className="text-white font-semibold">Support Available</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-white font-semibold">Transparent Reporting</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <p className="text-white font-semibold">Customized Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617] bg-opacity-95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Get answers to common questions about our performance marketing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Column - 6 FAQs */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What is performance marketing?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Performance marketing is a data-driven approach where advertisers pay only for specific actions like clicks, leads, or sales. It focuses on measurable results and ROI optimization.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How long does it take to see results?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Initial results can be seen within 2-4 weeks, but significant improvements typically occur after 3-6 months of consistent optimization and strategy refinement.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What is your pricing model?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  We offer flexible pricing based on your business needs, including monthly retainers, performance-based fees, and project-based pricing. Contact us for a custom quote.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you work with small businesses?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Yes! We work with businesses of all sizes, from startups to enterprises. Our strategies are tailored to fit your budget and growth objectives.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Which platforms do you manage?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  We manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, Twitter, YouTube, and other major advertising platforms based on your target audience.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can I track campaign performance?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Absolutely! We provide detailed monthly reports, real-time dashboards, and transparent analytics so you can track every metric and KPI that matters to your business.
                </p>
              </div>
            </div>

            {/* Right Column - 6 FAQs */}
            <div className="space-y-6">
              {/* FAQ 7 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What makes you different from other agencies?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  We focus on data-driven results, transparent reporting, and personalized strategies. Our team has proven expertise in Noida's market with 500+ successful campaigns.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you provide SEO services?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Yes, we offer comprehensive SEO services including technical audits, on-page optimization, link building, and local SEO to boost your organic visibility.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What is your contract duration?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  We typically recommend 6-12 month contracts for best results, but we also offer flexible month-to-month options. No long-term commitments required.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How do you measure success?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  We measure success through KPIs like conversion rates, cost per acquisition, ROI, click-through rates, and other metrics aligned with your specific business goals.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you offer free consultations?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
                  Yes! We provide a free initial consultation to understand your business, analyze your current marketing efforts, and propose a tailored strategy.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you help with social media marketing?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed pl-10">
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
