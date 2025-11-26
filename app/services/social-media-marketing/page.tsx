import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | STAR DIGITECH PRO',
  description: 'Expert social media marketing services in Delhi. Engage your audience and build brand loyalty across Facebook, Instagram, LinkedIn, and all social media platforms.',
  keywords: 'social media marketing, Facebook ads, Instagram marketing, LinkedIn advertising, social media strategy, Delhi',
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Social Media Marketing Services',
            provider: {
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
              url: 'https://stardigitechpro.vercel.app'
            },
            areaServed: 'Delhi, India',
            description: 'Expert social media marketing services in Delhi including Facebook, Instagram, LinkedIn, and Twitter marketing with proven engagement strategies.',
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
                name: 'Social Media Marketing',
                item: 'https://stardigitechpro.vercel.app/services/social-media-marketing'
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
              <span className="text-5xl">📱</span>
              <span className="text-primary font-semibold">Social Media Marketing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our Digital Marketing Services:{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Strategic Social Media Marketing
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Engage your audience and build brand loyalty with data-driven social media strategies across Facebook, Instagram, LinkedIn, Twitter, and more.
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
              Why Choose Our Social Media Marketing Services?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Build meaningful connections and drive business growth through strategic social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Audience Engagement</h3>
              <p className="text-gray-300">
                Build strong relationships with your audience through authentic content and consistent engagement across all platforms.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Awareness</h3>
              <p className="text-gray-300">
                Increase brand visibility and recognition with strategic content that resonates with your target audience.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lead Generation</h3>
              <p className="text-gray-300">
                Generate qualified leads through targeted social media campaigns and proven conversion strategies.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-300">
                Track engagement, reach, and conversions with detailed analytics and regular performance reports.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Paid Social Ads</h3>
              <p className="text-gray-300">
                Maximize ROI with expertly managed paid advertising campaigns on Facebook, Instagram, and LinkedIn.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Calendar</h3>
              <p className="text-gray-300">
                Strategic content planning and scheduling to maintain consistent presence and maximize engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Cover */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platforms We Manage
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive social media management across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Platform 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-bold text-white mb-3">Facebook</h3>
              <p className="text-gray-300 text-sm">
                Community building, ads management, and engagement strategies for the world's largest social network.
              </p>
            </div>

            {/* Platform 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-white mb-3">Instagram</h3>
              <p className="text-gray-300 text-sm">
                Visual storytelling, influencer partnerships, and shopping integration for maximum brand impact.
              </p>
            </div>

            {/* Platform 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-gray-300 text-sm">
                B2B marketing, thought leadership, and professional networking to reach decision-makers.
              </p>
            </div>

            {/* Platform 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-xl font-bold text-white mb-3">Twitter/X</h3>
              <p className="text-gray-300 text-sm">
                Real-time engagement, trending topics, and brand conversations for viral reach.
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
              Our Social Media Marketing Process
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A strategic approach to building your social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy Development</h3>
                <p className="text-gray-300 text-sm">
                  Analyze your brand, audience, and competitors to create a comprehensive social media strategy.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">Content Creation</h3>
                <p className="text-gray-300 text-sm">
                  Design engaging posts, graphics, videos, and stories that align with your brand voice and goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">Community Management</h3>
                <p className="text-gray-300 text-sm">
                  Engage with your audience, respond to comments, and build meaningful relationships with followers.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">04</div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Optimization</h3>
                <p className="text-gray-300 text-sm">
                  Track performance, analyze insights, and continuously optimize strategy for maximum results.
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
              Ready to Grow Your Social Media Presence?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's create engaging social media campaigns that build community, increase brand awareness, and drive real business results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary text-white font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get Free Social Media Audit
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
