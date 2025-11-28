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
              <span className="text-[#1d7ba8] font-semibold">Social Media Marketing</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Got questions about Social Media Marketing? We've got answers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Which social media platforms should my business be on?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  It depends on your audience. B2B companies thrive on LinkedIn, B2C brands excel on Instagram/Facebook, visual businesses love Pinterest, and younger audiences are on TikTok. We analyze your target market and recommend the right mix.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How often should I post on social media?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Consistency matters more than frequency. Generally, 3-5 times per week for Facebook/Instagram, daily for Twitter, and 2-3 times weekly for LinkedIn. We create a custom posting schedule based on your audience's activity.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you create social media content?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We handle everything: content strategy, copywriting, graphic design, video editing, scheduling, and posting. All content aligns with your brand voice and marketing goals.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How long does it take to see results?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Organic social growth takes time. You'll see initial engagement within weeks, but significant follower growth and business impact typically takes 3-6 months of consistent, quality content.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you manage my social media ads?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Absolutely! We create and manage paid campaigns on Facebook, Instagram, LinkedIn, Twitter, and TikTok—targeting the right audience with compelling creatives to drive conversions.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How do you handle negative comments?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We monitor comments closely and respond professionally and promptly. We have protocols for handling complaints, addressing concerns, and turning negative situations into positive customer experiences.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What's included in your social media packages?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Packages typically include strategy development, content creation, scheduling, posting, community management, engagement, monthly reporting, and ongoing optimization. Customizable based on your needs.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How do you measure social media success?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We track follower growth, engagement rates, reach, impressions, website traffic, lead generation, conversions, and ROI. Success metrics are customized to your specific business goals.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you help with influencer marketing?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We identify relevant influencers, negotiate partnerships, manage campaigns, and track results to amplify your brand message and reach new audiences authentically.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do I need to provide content ideas?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Not necessarily! We develop comprehensive content strategies and calendars. However, we love collaborating with clients who want to share ideas, company news, and behind-the-scenes content.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How much does social media management cost?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Costs vary by platform coverage, posting frequency, and services needed. Basic packages start from ₹20,000/month for 1-2 platforms. Comprehensive multi-platform management ranges from ₹40,000-80,000/month.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can social media actually drive sales?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Absolutely! When done strategically, social media drives brand awareness, builds trust, nurtures leads, and converts followers into customers. We focus on business outcomes, not just vanity metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Article Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              {/* Article Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  The Ultimate Guide to Social Media Marketing: Building Your Brand in the Digital Age
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how strategic social media marketing transforms businesses, builds authentic connections, and drives measurable growth across every platform.
                </p>
              </div>

              {/* Introduction */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 mb-12">
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  In today's hyperconnected world, social media has evolved from a simple communication tool into the most powerful marketing platform businesses have ever known. With over 4.9 billion active social media users worldwide—representing more than 60% of the global population—the question is no longer whether your business should be on social media, but how effectively you're using these platforms to connect with your audience, build meaningful relationships, and drive sustainable growth.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Social media marketing is the art and science of creating, publishing, and promoting content across social platforms to achieve specific marketing and business objectives. It's about meeting your customers where they already spend their time, engaging them with valuable content, building trust through authentic interactions, and ultimately guiding them through their journey from awareness to advocacy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">1.</span>
                  Understanding the Social Media Landscape in 2025
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  The social media ecosystem has matured dramatically, with each platform developing distinct characteristics, audiences, and best practices. Facebook remains the largest social network with nearly 3 billion monthly active users, making it essential for reaching broad demographics, particularly users aged 25-54. Its robust advertising platform and sophisticated targeting capabilities make it ideal for both B2C and B2B businesses looking to build community and drive conversions.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Instagram has transformed into a visual commerce powerhouse with over 2 billion users, particularly dominant among younger audiences aged 18-34. Its features—Feed posts, Stories, Reels, and Shopping—create multiple touchpoints for brands to showcase products, share behind-the-scenes content, and build aspirational brand identities. The platform's emphasis on visual storytelling makes it perfect for fashion, food, travel, lifestyle, and creative businesses.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  LinkedIn has cemented its position as the premier professional networking platform with 950 million members, making it indispensable for B2B marketing, thought leadership, and professional services. The platform's users are in a business mindset, actively seeking industry insights, professional development, and business solutions, creating unique opportunities for companies to establish authority and generate high-quality leads.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Twitter (X) continues to thrive as the real-time conversation platform, ideal for news, customer service, trend participation, and thought leadership. YouTube dominates video content with over 2.5 billion users, while TikTok has revolutionized short-form video content, particularly capturing Gen Z and millennial audiences with its algorithm-driven discovery system. Understanding where your audience congregates and what content formats they prefer is the foundation of effective social media strategy.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">2.</span>
                  Developing Your Strategic Social Media Framework
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Successful social media marketing begins with strategic planning, not random posting. Your strategy should start with clearly defined business objectives—whether that's increasing brand awareness, generating leads, driving website traffic, boosting sales, improving customer service, or building a community. These objectives must be specific, measurable, achievable, relevant, and time-bound (SMART), providing clear direction for all your social media activities.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Deep audience understanding separates exceptional social media marketing from mediocre efforts. Creating detailed buyer personas that capture your ideal customers' demographics, psychographics, pain points, aspirations, content preferences, and social media behaviors allows you to craft messages that resonate authentically. This research should inform not just what you say, but how you say it, when you post it, and which platforms you prioritize.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Competitive analysis provides invaluable insights into what's working in your industry and reveals opportunities to differentiate your brand. Study your competitors' content strategies, posting frequencies, engagement rates, audience responses, and campaign approaches. Identify gaps in their strategies that you can fill, and learn from both their successes and failures to accelerate your own growth.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Your brand voice and visual identity must remain consistent across all platforms while adapting to each platform's unique culture and format requirements. Whether your brand voice is professional, playful, inspirational, or educational, maintaining consistency builds recognition and trust. Your visual brand—including colors, fonts, imagery styles, and logo usage—should be immediately recognizable, creating a cohesive experience as users encounter your content across different platforms.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">3.</span>
                  Content Strategy: The Heart of Social Media Success
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Content is the currency of social media, and quality consistently trumps quantity. Your content strategy should balance various content types to keep your audience engaged and serve different stages of the customer journey. Educational content establishes your expertise and provides value—think how-to guides, industry insights, tips and tricks, and explanatory videos. This content positions you as a trusted resource and builds credibility with your audience.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Entertaining content captures attention in crowded feeds and increases shareability. This includes humorous posts, memes (when appropriate for your brand), behind-the-scenes glimpses, team spotlights, and creative storytelling that showcases your brand's personality. Entertainment doesn't mean abandoning professionalism—it means being human, relatable, and memorable in ways that resonate with your specific audience.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Inspirational content motivates your audience and reinforces your brand values. Success stories, customer testimonials, transformation stories, motivational quotes (when original or properly attributed), and purpose-driven narratives create emotional connections that transcend transactional relationships. This content type is particularly effective on platforms like Instagram and LinkedIn where users seek meaningful content that reflects their aspirations.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Promotional content, when done strategically, converts engaged audiences into customers. The key is balance—most experts recommend the 80/20 rule, where 80% of your content provides value, entertainment, or education, while only 20% directly promotes your products or services. When you do promote, focus on benefits rather than features, use social proof like customer reviews and case studies, and create urgency with limited-time offers or exclusive deals for your social followers.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  User-generated content (UGC) represents the most authentic and cost-effective content type. Encourage customers to share their experiences with your products, create branded hashtag campaigns, run contests that incentivize content creation, and always acknowledge and celebrate users who mention your brand. UGC not only provides you with authentic content but also strengthens community bonds and increases trust among potential customers who see real people using and endorsing your products.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">4.</span>
                  Community Management and Engagement Excellence
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Social media is inherently social, and brands that treat it as a broadcast channel miss its transformative potential. Community management involves actively engaging with your audience through prompt responses to comments and messages, asking questions that spark conversations, participating in relevant discussions, and acknowledging both positive and negative feedback professionally.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Building genuine relationships requires consistency, authenticity, and human connection. Respond to comments within hours, not days, using personalized responses rather than generic templates. Address people by name when possible, show appreciation for positive feedback, handle complaints with empathy and swift resolution, and recognize your most engaged followers to strengthen their connection to your brand.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Crisis management skills become essential as your presence grows. Develop protocols for handling negative situations before they occur. Respond quickly to customer complaints, take sensitive conversations to private channels when appropriate, never delete negative comments unless they violate clear community guidelines, and always follow up publicly once issues are resolved to demonstrate your commitment to customer satisfaction.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Community building extends beyond your own profiles. Participate in relevant Facebook Groups, engage with industry hashtags, comment thoughtfully on other brands' posts, collaborate with complementary businesses, and create opportunities for your community members to connect with each other. These activities expand your reach organically and position your brand as an active, valuable member of your industry ecosystem.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">5.</span>
                  Social Media Advertising: Amplifying Your Organic Reach
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  While organic reach remains valuable, algorithm changes across all major platforms have made paid advertising essential for maximizing impact. Social media advertising offers unprecedented targeting precision, allowing you to reach specific demographics, interests, behaviors, and even custom audiences based on your existing customer data or website visitors.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Facebook and Instagram advertising through Meta's Business Manager provides access to sophisticated targeting options, diverse ad formats (single image, carousel, video, collection, stories), and powerful optimization algorithms that improve performance over time. Start with clear campaign objectives—awareness, consideration, or conversion—and let the platform's machine learning optimize delivery to people most likely to take your desired action.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  LinkedIn advertising, while typically more expensive per click than other platforms, delivers exceptional ROI for B2B businesses due to its professional context and targeting options based on job titles, company size, industries, and professional interests. Sponsored content, message ads, and dynamic ads each serve different objectives, from brand awareness to lead generation and event registrations.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Twitter advertising excels for event promotion, product launches, and trending topic engagement, while TikTok's advertising platform has emerged as a powerful tool for reaching younger demographics with creative, authentic video content. YouTube advertising, including skippable and non-skippable video ads, reaches users in a high-intent environment where they're already consuming video content.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Successful social advertising requires continuous testing and optimization. A/B test your ad creative, headlines, calls-to-action, and targeting parameters to identify what resonates most with your audience. Monitor key metrics like click-through rates, cost per click, cost per acquisition, and return on ad spend. Start with modest budgets, identify winning combinations, then scale investment in top performers while continuously testing new approaches to prevent ad fatigue.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">6.</span>
                  Analytics, Measurement, and Continuous Optimization
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Data-driven decision making separates strategic social media marketing from guesswork. Each platform provides native analytics tools—Facebook Insights, Instagram Insights, LinkedIn Analytics, Twitter Analytics, and YouTube Analytics—offering detailed data about your audience demographics, content performance, engagement patterns, and growth trends.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Beyond vanity metrics like follower counts and likes, focus on metrics that align with your business objectives. For brand awareness campaigns, track reach, impressions, and follower growth. For engagement objectives, monitor engagement rate, comments, shares, and saves. For website traffic goals, analyze click-through rates and social referral traffic. For conversion objectives, measure leads generated, conversions, and return on investment.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Social listening tools like Hootsuite, Sprout Social, Brandwatch, or Mention allow you to monitor brand mentions, track competitor activities, identify trending topics in your industry, and understand sentiment around your brand. This intelligence informs content strategy, identifies potential crises before they escalate, and reveals opportunities for engagement and innovation.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Regular reporting and analysis create accountability and guide optimization. Establish monthly or quarterly review cycles where you analyze performance against objectives, identify top-performing content and underperforming areas, document key learnings and insights, and adjust your strategy based on data. This iterative approach ensures continuous improvement and demonstrates clear ROI to stakeholders.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">7.</span>
                  Influencer Marketing and Strategic Partnerships
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Influencer marketing has evolved from celebrity endorsements to authentic partnerships with creators who have built trust with niche audiences. The key is finding influencers whose audience aligns with your target market and whose values align with your brand. Micro-influencers (10,000-100,000 followers) often deliver better engagement rates and ROI than mega-influencers due to their closer relationships with followers and more affordable partnership rates.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Successful influencer partnerships require clear communication, creative freedom, and mutual benefit. Provide influencers with your key messages and brand guidelines, but allow them creative freedom to present your product authentically in their voice. Their audience follows them for their unique perspective, and overly scripted content feels inauthentic and performs poorly.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Measure influencer campaign success through trackable links, unique discount codes, engagement metrics, brand mention sentiment, and ultimately conversions attributed to each partnership. Long-term influencer relationships often prove more valuable than one-off promotions, building deeper associations between your brand and trusted voices in your industry.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#1d7ba8]">8.</span>
                  Emerging Trends Shaping Social Media Marketing
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Social commerce integration continues accelerating, with platforms adding shopping features that allow users to discover and purchase products without leaving the app. Instagram Shopping, Facebook Shops, Pinterest Product Pins, and TikTok Shopping create seamless purchase paths that reduce friction and increase conversion rates. Optimizing for social commerce means high-quality product imagery, detailed product information, customer reviews, and smooth checkout experiences.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Video content dominance shows no signs of slowing, with short-form video (particularly Reels, TikToks, and YouTube Shorts) driving the highest engagement rates across demographics. Live video streaming creates authentic, unedited connection opportunities for product launches, Q&A sessions, behind-the-scenes tours, and real-time engagement with your audience.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Artificial intelligence and automation tools enhance efficiency without sacrificing authenticity. AI-powered chatbots handle routine customer inquiries, content scheduling tools maintain consistent posting schedules, and AI analytics tools identify patterns and opportunities humans might miss. However, maintain human oversight for complex interactions, crisis responses, and creative decisions that require nuanced understanding.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Authenticity and transparency have become non-negotiable as audiences increasingly value genuine connections over polished perfection. Share your brand story authentically, acknowledge mistakes when they occur, highlight your team members and company culture, and take stands on values important to your audience. This vulnerability builds deeper connections than carefully curated perfection ever could.
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Your Path to Social Media Marketing Excellence
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Social media marketing represents one of the most powerful, cost-effective, and measurable marketing channels available to businesses of all sizes. Its ability to build authentic relationships, amplify your message, and drive measurable business results makes it essential to modern marketing strategies. However, success requires more than creating accounts and posting occasionally—it demands strategic planning, consistent execution, authentic engagement, creative content, and data-driven optimization.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  The brands that thrive on social media are those that understand their audience deeply, provide genuine value, engage authentically, and continuously adapt to platform changes and audience preferences. They view social media not as a megaphone for broadcasting messages but as a conversation platform for building relationships and community around their brand.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Whether you're just beginning your social media journey or looking to elevate your existing presence, remember that success comes from consistency, authenticity, and strategic thinking. Start with clear objectives, know your audience intimately, create content that provides value, engage genuinely with your community, leverage advertising strategically, measure what matters, and continuously optimize based on data and insights. The social media landscape will continue evolving, but these foundational principles will guide your success regardless of platform changes or emerging trends.
                </p>
              </div>
            </article>
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
