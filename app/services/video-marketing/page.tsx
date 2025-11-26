import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Marketing Services | STAR DIGITECH PRO',
  description: 'Expert video marketing services in Delhi. Engage audiences with powerful video content across YouTube, social media, and your website that drives conversions.',
  keywords: 'video marketing, YouTube marketing, video production, social media videos, video advertising, Delhi',
};

export default function VideoMarketingPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Video Marketing Services',
            provider: {
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
              url: 'https://stardigitechpro.vercel.app'
            },
            areaServed: 'Delhi, India',
            description: 'Expert video marketing services in Delhi including YouTube marketing, video production, and social media video strategies.',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'INR'
            }
          })
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://stardigitechpro.vercel.app'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://stardigitechpro.vercel.app/service'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Video Marketing',
                item: 'https://stardigitechpro.vercel.app/services/video-marketing'
              }
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#020617] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-5xl">🎬</span>
              <span className="text-primary font-semibold">Video Marketing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our Digital Marketing Services:{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Strategic Video Marketing
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Engage audiences with powerful video content that tells your story, builds trust, and drives conversions across YouTube, social media, and your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/service"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-primary/50"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Video Marketing Services?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Captivate your audience and boost conversions with professional video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Higher Engagement</h3>
              <p className="text-gray-300">
                Video content generates 1200% more shares than text and images combined, maximizing your reach and engagement.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Build Trust</h3>
              <p className="text-gray-300">
                Video helps build trust and credibility by showcasing your brand personality, products, and customer testimonials authentically.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Boost Conversions</h3>
              <p className="text-gray-300">
                Including video on landing pages can increase conversions by up to 80%, turning more viewers into customers.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Benefits</h3>
              <p className="text-gray-300">
                Video content improves SEO rankings, increases time on site, and helps you rank on both Google and YouTube search results.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile-First</h3>
              <p className="text-gray-300">
                Video is perfect for mobile users, with 90% of consumers watching videos on their smartphones and tablets.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Versatile Content</h3>
              <p className="text-gray-300">
                Repurpose video content across multiple channels - website, social media, email, and paid advertising campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Video Content We Create
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional video production tailored to your marketing goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Type 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-white mb-3">Explainer Videos</h3>
              <p className="text-gray-300 text-sm">
                Simplify complex concepts and showcase your products or services with engaging animated or live-action explainer videos.
              </p>
            </div>

            {/* Type 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Testimonial Videos</h3>
              <p className="text-gray-300 text-sm">
                Build trust and credibility with authentic customer testimonials and success stories that showcase real results.
              </p>
            </div>

            {/* Type 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Videos</h3>
              <p className="text-gray-300 text-sm">
                Short-form content optimized for Instagram Reels, TikTok, YouTube Shorts, and Facebook Stories to maximize engagement.
              </p>
            </div>

            {/* Type 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">Educational Content</h3>
              <p className="text-gray-300 text-sm">
                Tutorials, how-to guides, and educational videos that position your brand as an industry authority and thought leader.
              </p>
            </div>

            {/* Type 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-white mb-3">Product Demos</h3>
              <p className="text-gray-300 text-sm">
                Showcase product features, benefits, and use cases with detailed demonstrations that help customers make informed decisions.
              </p>
            </div>

            {/* Type 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Stories</h3>
              <p className="text-gray-300 text-sm">
                Tell your brand's story, mission, and values through compelling narrative videos that connect emotionally with viewers.
              </p>
            </div>

            {/* Type 7 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Video Ads</h3>
              <p className="text-gray-300 text-sm">
                High-converting video advertisements for YouTube, Facebook, Instagram, and display networks that drive immediate action.
              </p>
            </div>

            {/* Type 8 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-white mb-3">Live Streaming</h3>
              <p className="text-gray-300 text-sm">
                Real-time engagement through live streaming for product launches, Q&A sessions, webinars, and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Video Marketing Process
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From concept to distribution, we handle every aspect of your video marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-300 text-sm">
                  Define goals, target audience, messaging, and create a comprehensive video marketing strategy aligned with your objectives.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">Production</h3>
                <p className="text-gray-300 text-sm">
                  Professional video production including scripting, filming, animation, voiceover, and editing to create high-quality content.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300 text-sm">
                  Optimize videos for each platform with proper titles, descriptions, tags, thumbnails, and captions to maximize reach.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">04</div>
                <h3 className="text-xl font-bold text-white mb-3">Distribution & Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Strategic distribution across channels, paid promotion, and detailed analytics to track performance and optimize results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Got questions about Video Marketing? We've got answers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Why is video marketing important?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Video generates 1200% more shares than text and images combined. It boosts engagement, improves SEO, increases conversions, and is the most effective format for explaining products and building trust.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What types of videos should my business create?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Start with explainer videos, product demos, and customer testimonials. Then expand to educational content, behind-the-scenes, live streams, and video ads based on your goals and audience.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How long should marketing videos be?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  It depends on platform and purpose. Social media: 15-60 seconds. Explainer videos: 60-90 seconds. Product demos: 2-5 minutes. Educational content: 5-15 minutes. We optimize length for each use case.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you handle video production in-house?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We have a complete production team including scriptwriters, videographers, editors, animators, and voice-over artists to create professional videos from concept to final delivery.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How much does video production cost?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Costs vary by complexity. Simple animated explainers start from ₹25,000. Professional filmed content ranges from ₹50,000-2,00,000 per video. We offer packages to fit various budgets.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you optimize videos for YouTube SEO?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We optimize titles, descriptions, tags, thumbnails, playlists, and video content itself to rank higher in YouTube search and suggested videos, driving organic views and subscribers.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How long does video production take?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Timeline varies by complexity. Simple animations: 1-2 weeks. Professional filmed videos: 2-4 weeks. Complex productions: 4-8 weeks. We provide detailed timelines for each project.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you provide scripts and storyboards?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Absolutely! Our process includes scriptwriting, storyboarding, and concept visualization. You'll review and approve everything before production begins.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you repurpose videos for different platforms?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We optimize and reformat videos for YouTube, Instagram, Facebook, LinkedIn, TikTok, website, and email—maximizing your content investment across all channels.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How do you measure video marketing ROI?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We track views, watch time, engagement, click-through rates, conversions, cost per view, and revenue attribution. Comprehensive analytics show exactly how videos contribute to business goals.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you run video ad campaigns?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We create and manage video advertising campaigns on YouTube, Facebook, Instagram, LinkedIn, and display networks—targeting the right audience to maximize conversions and ROAS.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do I own the videos you create?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! Upon final payment, you own full rights to all videos we create. You can use them anywhere, anytime, without additional licensing fees or restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of Video?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's create compelling video content that captivates your audience, builds trust, and drives measurable business results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary text-white font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get Free Video Strategy
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
