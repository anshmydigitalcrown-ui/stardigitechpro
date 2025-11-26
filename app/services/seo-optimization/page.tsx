import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Optimization Services | STAR DIGITECH PRO',
  description: 'Professional SEO optimization services in Noida. Boost organic rankings with proven SEO strategies that increase visibility, traffic, and revenue.',
  keywords: 'SEO optimization, search engine optimization, organic ranking, SEO Noida, on-page SEO, off-page SEO',
};

export default function SEOOptimizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#020617] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-5xl">🔍</span>
              <span className="text-primary font-semibold">SEO Optimization</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Dominate Search Rankings with{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Expert SEO
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Boost your organic visibility and drive qualified traffic with proven SEO strategies. Get found by customers actively searching for your products and services.
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
                href="/"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-primary/50"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Get sustainable, long-term growth with our comprehensive SEO strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Increased Organic Traffic</h3>
                <p className="text-white leading-relaxed">
                  Drive more qualified visitors to your website through improved search engine rankings for relevant keywords.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3">Higher ROI</h3>
                <p className="text-white leading-relaxed">
                  SEO delivers one of the highest returns on investment compared to other marketing channels with long-lasting results.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Targeted Traffic</h3>
                <p className="text-white leading-relaxed">
                  Attract customers actively searching for your products or services, resulting in higher conversion rates.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Authority</h3>
                <p className="text-white leading-relaxed">
                  Build trust and credibility by ranking on the first page of Google for important industry keywords.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>
                <p className="text-white leading-relaxed">
                  Track your progress with detailed analytics including rankings, traffic, conversions, and ROI metrics.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Local & Global Reach</h3>
                <p className="text-white leading-relaxed">
                  Optimize for local searches or expand your reach globally with targeted international SEO strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive SEO Services
              </h2>
              <p className="text-white text-lg">
                Everything you need to dominate search engine rankings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Technical SEO Audit</h3>
                  <p className="text-white text-sm">
                    Comprehensive analysis of site structure, crawlability, indexation, page speed, mobile optimization, and technical issues.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Keyword Research & Strategy</h3>
                  <p className="text-white text-sm">
                    In-depth keyword analysis to identify high-value opportunities with detailed competitor research and content gap analysis.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">On-Page Optimization</h3>
                  <p className="text-white text-sm">
                    Content optimization, meta tags, heading structure, internal linking, schema markup, and user experience improvements.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Link Building & Off-Page SEO</h3>
                  <p className="text-white text-sm">
                    Strategic link acquisition from authoritative websites, guest posting, digital PR, and brand mention building.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Content Creation & Optimization</h3>
                  <p className="text-white text-sm">
                    SEO-optimized content writing, blog posts, landing pages, and content refreshes to improve rankings and engagement.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Local SEO</h3>
                  <p className="text-white text-sm">
                    Google Business Profile optimization, local citations, review management, and local search visibility improvement.
                  </p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Analytics & Reporting</h3>
                  <p className="text-white text-sm">
                    Monthly performance reports with ranking updates, traffic analysis, conversion tracking, and actionable insights.
                  </p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Ongoing Optimization</h3>
                  <p className="text-white text-sm">
                    Continuous monitoring, algorithm update adaptation, competitor analysis, and strategy refinement for sustained growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of SEO Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Professional SEO
              </h2>
              <p className="text-white text-lg">
                Transform your online presence with strategic search optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Sustainable Growth</h3>
                    <p className="text-white leading-relaxed">
                      Unlike paid ads, SEO provides long-term results. Once you rank, you continue receiving traffic without ongoing ad spend. Build a foundation for sustained organic growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Increased Credibility</h3>
                    <p className="text-white leading-relaxed">
                      Users trust organic search results more than ads. High rankings signal authority and trustworthiness, enhancing your brand reputation and customer confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Better User Experience</h3>
                    <p className="text-white leading-relaxed">
                      SEO best practices improve site speed, mobile experience, and navigation. A better UX leads to higher engagement, lower bounce rates, and more conversions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Competitive Advantage</h3>
                    <p className="text-white leading-relaxed">
                      Outrank competitors for valuable keywords. Capture market share from competitors not investing in SEO. Dominate your industry's search landscape.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Mobile Visibility</h3>
                    <p className="text-white leading-relaxed">
                      Optimize for mobile search where most users discover businesses. Capture local searches, voice searches, and on-the-go customers actively looking for solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Cost-Effective Marketing</h3>
                    <p className="text-white leading-relaxed">
                      SEO delivers the highest ROI of any marketing channel. Lower customer acquisition costs compared to paid advertising with results that compound over time.
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
              <span className="bg-gradient-to-r from-primary/20 to-[#1d7ba8]/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-primary/30">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">
                Why STAR DIGITECH PRO is Your Best Choice
              </span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
              In today's competitive digital landscape, choosing the right SEO partner can make all the difference between page one and page ten.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Proven SEO Success</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        At STAR DIGITECH PRO, we have a track record of ranking websites on page one for competitive keywords. Our SEO strategies have helped businesses achieve sustainable organic growth, increased traffic, and higher revenue through search visibility.
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
                      <h3 className="text-2xl font-bold text-white mb-3">White-Hat SEO Practices</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        We strictly follow Google's guidelines and use only white-hat SEO techniques. No black-hat tactics, no shortcuts, no penalties. We build sustainable rankings that stand the test of time and algorithm updates.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Experienced SEO Specialists</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Our team includes certified SEO experts with years of experience across various industries. We stay updated with the latest algorithm changes, ranking factors, and best practices to keep your site ahead of the competition.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Transparent Reporting</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Receive detailed monthly reports showing keyword rankings, traffic growth, backlink acquisition, and ROI metrics. We believe in full transparency so you always know exactly how your SEO investment is performing.
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
                <p className="text-white font-semibold">SEO Monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-white font-semibold">White-Hat Techniques</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <p className="text-white font-semibold">Growth Potential</p>
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
                Get answers to common questions about our SEO optimization services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How long does SEO take to show results?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    SEO typically takes 3-6 months to show significant results. However, you'll start seeing improvements in rankings and traffic within the first few months as we optimize your site and build authority.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What is the difference between on-page and off-page SEO?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    On-page SEO involves optimizing elements on your website (content, meta tags, structure). Off-page SEO focuses on external factors like backlinks, social signals, and brand mentions.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do you guarantee first page rankings?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    While we cannot guarantee specific rankings (no legitimate SEO can), we guarantee our best efforts using proven strategies. We focus on sustainable growth and long-term results.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How do you measure SEO success?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We track keyword rankings, organic traffic growth, conversion rates, backlink quality, domain authority, and most importantly, ROI from organic search traffic.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What is local SEO?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Local SEO optimizes your online presence for local searches. It includes Google Business Profile optimization, local citations, reviews, and location-specific content to rank for "near me" searches.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Will SEO work for my industry?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! SEO works for virtually every industry. We customize our strategies based on your specific industry, competition, target audience, and business goals.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* FAQ 7 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How much does SEO cost?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    SEO pricing varies based on your industry competitiveness, goals, and current website status. We offer customized packages starting from affordable monthly retainers. Contact us for a quote.
                  </p>
                </div>

                {/* FAQ 8 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What are backlinks and why are they important?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Backlinks are links from other websites to yours. They're crucial because Google views them as "votes of confidence." Quality backlinks from authoritative sites significantly boost rankings.
                  </p>
                </div>

                {/* FAQ 9 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Can I do SEO myself?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Basic SEO is possible to learn, but professional SEO requires technical expertise, tools, experience, and ongoing effort. Most businesses find better ROI by outsourcing to experts.
                  </p>
                </div>

                {/* FAQ 10 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What is technical SEO?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Technical SEO optimizes your website's infrastructure for search engines. It includes site speed, mobile-friendliness, crawlability, indexation, schema markup, and site architecture.
                  </p>
                </div>

                {/* FAQ 11 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How often will I receive reports?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We provide comprehensive monthly reports detailing rankings, traffic, conversions, and work completed. You'll also have 24/7 access to your analytics dashboard for real-time data.
                  </p>
                </div>

                {/* FAQ 12 */}
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What if I'm not satisfied with the results?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We're committed to your success. If you're not seeing progress, we'll revise our strategy and intensify efforts. We work with you until you achieve your SEO goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Let's create an SEO strategy that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-primary bg-white rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your SEO Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="tel:+919999999999"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-white/20"
              >
                📞 Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
