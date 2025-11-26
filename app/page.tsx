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

      {/* CTA Section at bottom */}
      <section className="py-20 bg-[#020617] bg-opacity-95 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the 200+ businesses in Noida who trust us with their digital marketing
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
