"use client";

import Link from "next/link";
import Image from "next/image";

// Performance Marketing Landing Page
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#020617] py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d7ba8] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full mix-blend-multiply blur-3xl opacity-5"></div>
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 5 - Conversion Rate Optimization */}
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
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 7 - Email Marketing */}
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
                    Learn More
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

      {/* Get In Touch Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Map and Contact Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192682!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Phone</h3>
                      <p className="text-gray-300 text-sm">+91 (XXX) XXX-XXXX</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email</h3>
                      <p className="text-gray-300 text-sm">info@stardigitechpro.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-white font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>

                {/* Service Interested In */}
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">PPC Management</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="email">Email Marketing</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="conversion">Conversion Rate Optimization</option>
                    <option value="influencer">Influencer Marketing</option>
                    <option value="video">Video Marketing</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-[#1d7ba8] text-white font-bold py-4 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About STAR DIGITECH PRO Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About STAR DIGITECH PRO
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your Trusted Partner for Digital Growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Who We Are */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    STAR DIGITECH PRO is a leading performance marketing agency based in Noida, specializing in data-driven digital marketing strategies that deliver measurable results. With over 500+ successful campaigns and a proven track record of 300% average ROI, we help businesses of all sizes achieve their growth objectives.
                  </p>
                  <p>
                    Our team of certified digital marketing experts combines creativity with analytics to craft customized solutions for SEO, PPC, social media marketing, and more. We don't just run campaigns – we build long-term partnerships focused on your success.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with cutting-edge digital marketing strategies that drive growth, maximize ROI, and create lasting impact in the digital landscape. We believe in transparency, innovation, and delivering results that exceed expectations.
                </p>
              </div>
            </div>

            {/* Right Column - Why Businesses Trust Us */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Why Businesses Trust Us</h3>
              <div className="space-y-6">
                {/* Proven Expertise */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Proven Expertise</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      5+ years of experience with 500+ successful campaigns across industries
                    </p>
                  </div>
                </div>

                {/* Measurable Results */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Measurable Results</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Average 300% ROI with transparent reporting and real-time analytics
                    </p>
                  </div>
                </div>

                {/* Dedicated Support */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Dedicated Support</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      200+ satisfied clients with dedicated account managers and 24/7 support
                    </p>
                  </div>
                </div>

                {/* Innovation First */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Innovation First</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Cutting-edge strategies using the latest tools and technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1d7ba8] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Results-Driven */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎯</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Results-Driven</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                We focus on delivering measurable outcomes that directly impact your bottom line
              </p>
            </div>

            {/* Transparency */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🤝</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Transparency</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Clear communication and honest reporting in everything we do
              </p>
            </div>

            {/* Innovation */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💡</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Innovation</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Staying ahead of digital trends to give our clients a competitive edge
              </p>
            </div>

            {/* Excellence */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🏆</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Excellence</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Committed to delivering the highest quality service in every project
              </p>
            </div>

            {/* Data-First */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Data-First</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Every decision backed by analytics and performance metrics
              </p>
            </div>

            {/* Partnership */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-2xl flex items-center justify-center border border-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💼</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Partnership</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                We see our clients as partners, invested in their long-term success
              </p>
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

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Performance Marketing Agency in Noida: Drive Measurable Results
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At STAR DIGITECH PRO, we specialize in data-driven performance marketing strategies that deliver real, measurable ROI for businesses across India and beyond.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">What is Performance Marketing?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Performance marketing is a comprehensive digital marketing approach where advertisers only pay for specific actions or results. Unlike traditional advertising methods that charge based on impressions or reach, performance marketing ensures that every rupee spent is tied to tangible outcomes—whether it's clicks, leads, conversions, or sales. This results-oriented methodology has revolutionized how businesses approach digital advertising, making it one of the most cost-effective and accountable forms of marketing available today.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a leading performance marketing agency in Noida, we leverage cutting-edge tools, advanced analytics, and industry best practices to create campaigns that don't just generate traffic—they generate qualified leads and drive revenue growth. Our team of certified digital marketing specialists combines creativity with data science to optimize every touchpoint of your customer journey, ensuring maximum return on your marketing investment.
                </p>
              </div>

              {/* Core Services */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Our Performance Marketing Services</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-3">Pay-Per-Click (PPC) Advertising</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Our PPC management services encompass Google Ads, Bing Ads, and social media advertising platforms. We conduct extensive keyword research, craft compelling ad copy, design high-converting landing pages, and continuously optimize campaigns to reduce cost-per-acquisition while maximizing conversion rates. With our advanced bid management strategies and A/B testing methodologies, we ensure your ads appear in front of the right audience at the right time, delivering qualified traffic that converts.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-3">Search Engine Optimization (SEO)</h4>
                    <p className="text-gray-300 leading-relaxed">
                      SEO remains one of the most powerful long-term performance marketing strategies. Our comprehensive SEO services include technical website audits, on-page optimization, content strategy development, link building, and local SEO for businesses targeting specific geographic areas. We stay ahead of Google's algorithm updates and implement white-hat techniques that build sustainable organic visibility. From keyword research to content creation and backlink acquisition, we handle every aspect of your SEO campaign to improve your search rankings and drive qualified organic traffic.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-3">Social Media Marketing</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Social media platforms offer unprecedented opportunities for targeted advertising and audience engagement. Our social media marketing services cover Facebook Ads, Instagram Ads, LinkedIn advertising, Twitter campaigns, and emerging platforms. We create compelling visual content, develop audience personas, implement sophisticated targeting strategies, and run conversion-optimized campaigns that turn social media users into customers. Our approach combines creative storytelling with data-driven optimization to maximize your social media ROI.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1d7ba8] mb-3">Conversion Rate Optimization (CRO)</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Driving traffic is only half the battle—converting that traffic into customers is where the real value lies. Our CRO services involve comprehensive website analysis, user behavior tracking, heat mapping, A/B testing, and landing page optimization. We identify friction points in your conversion funnel and implement data-backed improvements that increase conversion rates, reduce bounce rates, and improve overall user experience. Through continuous testing and refinement, we help you squeeze maximum value from every visitor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose STAR DIGITECH PRO as Your Performance Marketing Partner?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1d7ba8] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Transparent Reporting and Analytics</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We believe in complete transparency. You'll receive detailed reports showing exactly how your budget is being spent and what results it's generating. Our custom dashboards provide real-time insights into campaign performance, allowing you to track ROI, monitor KPIs, and make informed decisions about your marketing strategy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1d7ba8] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Industry-Certified Experts</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our team consists of Google Ads certified professionals, Facebook Blueprint certified marketers, and experienced SEO specialists who stay updated with the latest industry trends and best practices. With years of hands-on experience managing campaigns across diverse industries, we bring proven expertise to every project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1d7ba8] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Customized Strategies for Every Business</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We understand that every business is unique. That's why we don't offer cookie-cutter solutions. Instead, we take the time to understand your business goals, target audience, competitive landscape, and budget constraints to develop customized performance marketing strategies that align with your specific objectives and deliver measurable results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1d7ba8] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Proven Track Record of Success</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We've helped businesses across various industries achieve remarkable growth through performance marketing. From startups looking to establish their online presence to established enterprises seeking to scale their digital operations, our portfolio showcases consistent results: increased traffic, higher conversion rates, improved ROI, and sustained business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Expertise */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing Agency in Noida: Local Expertise, Global Standards</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Based in Sector 62, Noida, we're perfectly positioned to serve businesses throughout the National Capital Region and across India. Our deep understanding of local markets combined with global best practices allows us to create campaigns that resonate with Indian audiences while maintaining international quality standards. Whether you're a local business looking to dominate your market or a national brand seeking to expand your digital footprint, we have the expertise and resources to help you succeed.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We understand the unique challenges and opportunities that Indian businesses face in the digital landscape. From navigating regional language preferences to understanding cultural nuances and local search behavior, our team brings invaluable insights that give your campaigns a competitive edge. Our proximity allows us to provide personalized service, quick response times, and the flexibility to meet in person when needed, ensuring seamless collaboration throughout our partnership.
                </p>
              </div>

              {/* Getting Started */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Digital Marketing Results?</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you're ready to move beyond vanity metrics and focus on what really matters—measurable business growth—it's time to partner with STAR DIGITECH PRO. Our performance marketing strategies are designed to deliver the results you need: more qualified leads, higher conversion rates, and improved return on investment. We don't just manage campaigns; we become your dedicated partners in growth, working tirelessly to optimize every aspect of your digital marketing presence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Contact us today for a free consultation where we'll discuss your business goals, analyze your current marketing efforts, and outline a customized performance marketing strategy tailored to your needs. Let's work together to unlock your business's full potential in the digital marketplace. With our expertise, your dedication, and a data-driven approach, there's no limit to what we can achieve together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - FAQs 1-6 */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  What services does STAR DIGITECH PRO offer?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer comprehensive digital marketing services including SEO Optimization, PPC Management, Social Media Marketing, Content Marketing, Email Marketing, Analytics & Reporting, Conversion Rate Optimization, Influencer Marketing, and Video Marketing.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Results vary by service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months for significant improvements. We provide regular reports and transparent updates throughout the process to track progress.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  What makes STAR DIGITECH PRO different from other agencies?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We combine data-driven strategies with personalized service. Our proven track record of 300% average ROI, transparent reporting, dedicated account managers, and focus on long-term partnerships set us apart from competitors.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Do you work with businesses outside Noida?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! While we're based in Noida, we serve clients across India and internationally. Our digital marketing services can be delivered remotely, and we use advanced collaboration tools to ensure seamless communication.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  What is your pricing structure?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer customized pricing based on your specific needs, goals, and budget. After an initial consultation, we create a tailored proposal that aligns with your objectives. Contact us for a free consultation and quote.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  How do you measure campaign success?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We track key performance indicators (KPIs) relevant to your goals: conversions, ROI, traffic, engagement rates, lead quality, and revenue growth. You'll receive detailed reports with real-time analytics and regular performance reviews.
                </p>
              </div>
            </div>

            {/* Right Column - FAQs 7-12 */}
            <div className="space-y-6">
              {/* FAQ 7 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Can I choose specific services or do I need a complete package?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You have complete flexibility! You can choose individual services or combine multiple services for a comprehensive strategy. We'll recommend the best approach based on your goals and budget during our consultation.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  What industries do you specialize in?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We have experience across diverse industries including e-commerce, healthcare, real estate, education, hospitality, technology, and more. Our team adapts strategies to fit your industry's unique challenges and opportunities.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Do you provide content creation services?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! Our content marketing services include blog writing, social media content, video scripts, email campaigns, infographics, and more. All content is SEO-optimized and tailored to your brand voice and target audience.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  What is your contract length and cancellation policy?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We typically recommend a minimum 3-6 month commitment for optimal results, but contract lengths are flexible. We offer transparent terms with no hidden fees, and cancellation policies are discussed upfront during onboarding.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  How often will I receive updates on my campaigns?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You'll have 24/7 access to your account dashboard for real-time data. Additionally, we provide weekly updates, monthly detailed reports, and quarterly strategy reviews with your dedicated account manager.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  How do I get started with STAR DIGITECH PRO?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Simply contact us through our website, phone, or email to schedule a free consultation. We'll discuss your goals, analyze your current digital presence, and create a customized strategy to help you achieve success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1d7ba8] text-white font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
