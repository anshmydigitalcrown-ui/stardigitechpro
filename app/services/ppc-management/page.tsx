import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Management Services | STAR DIGITECH PRO',
  description: 'Expert PPC management services in Noida. Strategic paid advertising campaigns to drive qualified traffic and maximize conversions with proven ROI.',
  keywords: 'PPC management, pay per click, Google Ads, paid advertising, Noida',
};

export default function PPCManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#020617] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-5xl">🎯</span>
              <span className="text-primary font-semibold">PPC Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Strategic PPC Management That Delivers{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Drive qualified traffic and maximize conversions with data-driven paid advertising campaigns across Google Ads, Facebook, LinkedIn, and more.
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
              Why Choose Our PPC Management Services?
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Maximize your advertising budget with proven strategies that deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Higher ROI</h3>
              <p className="text-white">
                Our data-driven approach ensures every dollar spent delivers maximum return on investment with average 300% ROI.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualified Traffic</h3>
              <p className="text-white">
                Target the right audience at the right time with precision targeting to drive qualified leads to your business.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent Reporting</h3>
              <p className="text-white">
                Real-time dashboards and detailed monthly reports keep you informed about campaign performance and ROI.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Budget Optimization</h3>
              <p className="text-white">
                Smart bid management and continuous optimization ensure you get the most value from your advertising budget.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Results</h3>
              <p className="text-white">
                Unlike SEO, PPC delivers immediate visibility and traffic, with results visible within days of campaign launch.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Management</h3>
              <p className="text-white">
                Certified Google Ads and Facebook Ads specialists manage your campaigns with proven expertise and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What's Included in Our PPC Management
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Comprehensive PPC services designed to maximize your advertising performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Campaign Strategy & Planning', desc: 'Custom PPC strategy aligned with your business goals and target audience' },
                { title: 'Keyword Research & Selection', desc: 'In-depth keyword analysis to identify high-converting search terms' },
                { title: 'Ad Copy Creation', desc: 'Compelling ad copy that drives clicks and conversions' },
                { title: 'Landing Page Optimization', desc: 'Optimize landing pages for maximum conversion rates' },
                { title: 'Bid Management', desc: 'Strategic bid optimization to maximize ROI and minimize costs' },
                { title: 'A/B Testing', desc: 'Continuous testing of ads, keywords, and landing pages for improvement' },
                { title: 'Conversion Tracking', desc: 'Complete tracking setup to measure every conversion and action' },
                { title: 'Monthly Reporting', desc: 'Detailed performance reports with insights and recommendations' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Manage */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platforms We Manage
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Expert campaign management across all major advertising platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Google Ads', icon: '🔍' },
              { name: 'Facebook Ads', icon: '📘' },
              { name: 'Instagram Ads', icon: '📸' },
              { name: 'LinkedIn Ads', icon: '💼' },
              { name: 'Twitter Ads', icon: '🐦' },
              { name: 'YouTube Ads', icon: '📺' },
              { name: 'Microsoft Ads', icon: '🪟' },
              { name: 'Display Network', icon: '🌐' },
            ].map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="text-white font-bold">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of PPC Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits of PPC Advertising
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Discover how PPC can transform your business with measurable results and immediate impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Instant Visibility</h3>
                    <p className="text-white leading-relaxed">
                      Unlike SEO which takes months, PPC puts your business at the top of search results immediately. Start driving traffic within 24 hours of campaign launch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Precise Targeting</h3>
                    <p className="text-white leading-relaxed">
                      Target your ideal customers based on location, demographics, interests, behavior, and search intent. Reach people actively looking for your products or services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>
                    <p className="text-white leading-relaxed">
                      Track every click, conversion, and rupee spent with detailed analytics. Know exactly what's working and make data-driven decisions to improve ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Budget Control</h3>
                    <p className="text-white leading-relaxed">
                      Set your own daily and monthly budgets. Pay only when someone clicks your ad. Scale up winning campaigns and pause underperforming ones instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Brand Awareness</h3>
                    <p className="text-white leading-relaxed">
                      Even if users don't click, your ads increase brand visibility and awareness. Display ads reach millions of users across Google's network and social platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Competitive Advantage</h3>
                    <p className="text-white leading-relaxed">
                      Outrank competitors for valuable keywords. Capture customers searching for competitor brands. Dominate your market with strategic bidding and optimization.
                    </p>
                  </div>
                </div>
              </div>
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
              <span className="bg-gradient-to-r from-primary/20 to-[#1d7ba8]/20 text-primary px-6 py-2 rounded-full text-sm font-semibold border border-primary/30">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Why STAR DIGITECH PRO is Your Best Choice
              </span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
              In today's competitive digital landscape, choosing the right PPC management partner can make all the difference between success and mediocrity.
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
                        At STAR DIGITECH PRO, we don't just promise results—we deliver them. With years of experience managing PPC campaigns across diverse industries, we've helped hundreds of businesses achieve exceptional ROI. Our portfolio showcases consistent improvements in click-through rates, conversion rates, and cost-per-acquisition. We combine cutting-edge bidding strategies with time-tested methodologies to ensure your PPC success.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Data-Driven Optimization</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        We believe in the power of data. Every PPC decision we make is backed by comprehensive analytics, A/B testing, and performance metrics. Our team uses advanced tools like Google Analytics, Google Tag Manager, and platform-specific insights to track, measure, and optimize every aspect of your campaigns. From keyword performance to ad copy effectiveness, we leverage data to maximize your ROI.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Certified PPC Experts</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Our team comprises Google Ads certified professionals with expertise across all major advertising platforms. From search campaigns to display networks, shopping ads to video advertising—we have the talent and knowledge to handle every aspect of your PPC strategy. We invest continuously in training and certifications to stay ahead of platform updates and industry best practices.
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
                        We believe in building lasting relationships based on trust and transparency. You'll receive detailed performance reports, regular strategy updates, and direct access to your dedicated PPC account manager. We don't hide behind jargon—we explain everything in clear terms so you understand exactly how your campaigns are performing and where your ad spend is going. Your success is our success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats/Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-white font-semibold">Campaign Monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-white font-semibold">Transparent Reporting</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <p className="text-white font-semibold">Custom Strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Get answers to common questions about our PPC management services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What is PPC advertising?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    PPC (Pay-Per-Click) is an online advertising model where you pay only when someone clicks on your ad. It's a cost-effective way to drive targeted traffic to your website.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How much should I budget for PPC?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    PPC budgets vary based on industry, competition, and goals. We recommend starting with at least ₹30,000-50,000 per month for effective campaigns with measurable results.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How long before I see results?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Unlike SEO, PPC delivers immediate results. You'll start seeing traffic and clicks within 24-48 hours of campaign launch. Optimization for best ROI takes 2-4 weeks.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Which platform is best for my business?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    It depends on your target audience. Google Ads is great for search intent, Facebook/Instagram for B2C, and LinkedIn for B2B. We'll recommend the best platform mix for your goals.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do you charge setup fees?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We charge a one-time setup fee for new campaigns, which includes account setup, keyword research, ad creation, and tracking implementation. Contact us for details.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What is Quality Score in Google Ads?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Quality Score is Google's rating of ad relevance and landing page quality. Higher scores lead to lower costs and better ad positions. We optimize for high Quality Scores.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* FAQ 7 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Can I control my daily budget?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! You have full control over your daily and monthly budget. We set up campaigns to never exceed your specified budget limits and provide daily spending reports.
                  </p>
                </div>

                {/* FAQ 8 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How do you track conversions?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We implement comprehensive conversion tracking using Google Analytics, Google Tag Manager, and platform-specific pixels to track every lead, sale, and action.
                  </p>
                </div>

                {/* FAQ 9 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What's your management fee structure?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Our management fees are transparent and based on your monthly ad spend. We offer competitive rates with no hidden charges. Contact us for a custom quote.
                  </p>
                </div>

                {/* FAQ 10 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do you provide regular reports?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! You receive detailed monthly reports with insights on clicks, conversions, ROI, and recommendations. Plus, you get 24/7 access to real-time dashboards.
                  </p>
                </div>

                {/* FAQ 11 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Can I pause campaigns anytime?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Absolutely! You can pause, adjust, or stop campaigns at any time. There are no long-term contracts or cancellation penalties.
                  </p>
                </div>

                {/* FAQ 12 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do you handle ad creative design?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! Our team creates compelling ad copy, designs display ads, and optimizes landing pages to maximize your campaign performance and conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Business with PPC?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Let's create a custom PPC strategy that drives qualified traffic, increases conversions, and maximizes your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
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
    </>
  );
}
