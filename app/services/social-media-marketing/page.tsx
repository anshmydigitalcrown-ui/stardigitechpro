import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | STAR DIGITECH PRO',
  description: 'Expert social media marketing services in Noida. Engage your audience and build brand loyalty across all social media platforms.',
  keywords: 'social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, social media management',
};

export default function SocialMediaMarketingPage() {
  return (
    <>
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
              Build Your Brand with{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Social Media
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Engage your audience and build brand loyalty across Facebook, Instagram, LinkedIn, Twitter, and more with strategic social media marketing.
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
                Why Social Media Marketing Matters
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Connect with your audience where they spend their time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-3">Audience Engagement</h3>
                <p className="text-white leading-relaxed">
                  Build meaningful relationships with your audience through consistent, valuable content and authentic interactions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Awareness</h3>
                <p className="text-white leading-relaxed">
                  Increase visibility and reach new audiences through strategic social media campaigns and viral content.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Community Building</h3>
                <p className="text-white leading-relaxed">
                  Create a loyal community of brand advocates who promote your business through word-of-mouth and social sharing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Targeted Advertising</h3>
                <p className="text-white leading-relaxed">
                  Reach your ideal customers with precision targeting based on demographics, interests, behaviors, and more.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Analytics</h3>
                <p className="text-white leading-relaxed">
                  Track engagement, reach, conversions, and ROI with detailed social media analytics and insights.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3">Cost-Effective</h3>
                <p className="text-white leading-relaxed">
                  Get high ROI with organic social media strategies and affordable paid advertising options across all platforms.
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
                Complete Social Media Management
              </h2>
              <p className="text-white text-lg">
                Everything you need for a successful social media presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Social Media Strategy</h3>
                  <p className="text-white text-sm">
                    Custom strategy development aligned with your business goals, target audience analysis, and competitive research.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Content Creation & Design</h3>
                  <p className="text-white text-sm">
                    Professional graphics, videos, reels, stories, and engaging copy tailored for each platform's best practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Content Calendar Management</h3>
                  <p className="text-white text-sm">
                    Strategic posting schedule with consistent content delivery across all your social media channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Community Management</h3>
                  <p className="text-white text-sm">
                    Active engagement with your audience, responding to comments, messages, and building relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Social Media Advertising</h3>
                  <p className="text-white text-sm">
                    Paid campaigns on Facebook, Instagram, LinkedIn, Twitter with targeting, optimization, and budget management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Influencer Partnerships</h3>
                  <p className="text-white text-sm">
                    Connect with relevant influencers and manage collaborations to expand your reach and credibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Analytics & Reporting</h3>
                  <p className="text-white text-sm">
                    Comprehensive monthly reports with engagement metrics, growth tracking, and ROI analysis for all platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Crisis Management</h3>
                  <p className="text-white text-sm">
                    Reputation monitoring and rapid response strategies to handle negative feedback and protect your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Social Media Marketing
              </h2>
              <p className="text-white text-lg">
                Transform your brand's digital presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                    <p className="text-white leading-relaxed">
                      Connect with audiences worldwide. Social media breaks geographical barriers, allowing you to reach potential customers across the globe instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Customer Insights</h3>
                    <p className="text-white leading-relaxed">
                      Gain valuable insights into customer preferences, behaviors, and feedback. Use social listening to improve your products and services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Increased Website Traffic</h3>
                    <p className="text-white leading-relaxed">
                      Drive quality traffic to your website through social media posts, stories, and ads. Convert social followers into website visitors and customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Brand Personality</h3>
                    <p className="text-white leading-relaxed">
                      Showcase your brand's unique personality, values, and culture. Build emotional connections that turn followers into loyal brand advocates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Improved Customer Service</h3>
                    <p className="text-white leading-relaxed">
                      Provide instant customer support through social media channels. Resolve issues quickly and publicly demonstrate your commitment to customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Competitive Edge</h3>
                    <p className="text-white leading-relaxed">
                      Stay ahead of competitors with consistent social presence. Monitor competitor strategies and adapt quickly to market trends and opportunities.
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
              Partner with social media experts who understand platforms, audiences, and what drives engagement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Platform Expertise</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Our team has deep expertise across all major social platforms. We understand the unique algorithms, best practices, and audience behaviors of each channel to maximize your results.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Creative Excellence</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Stand out with stunning visuals and compelling content. Our creative team produces scroll-stopping graphics, videos, and copy that capture attention and drive engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#1d7ba8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Community Focus</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        We don't just post content—we build communities. Our community managers actively engage with your audience, foster discussions, and create brand advocates.
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
                      <h3 className="text-2xl font-bold text-white mb-3">Data-Driven Strategy</h3>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        Every decision is backed by data. We continuously analyze performance, test content variations, and optimize strategies to maximize engagement and ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <p className="text-white font-semibold">Social Monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-white font-semibold">Original Content</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-[#1d7ba8]/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <p className="text-white font-semibold">Creative Ideas</p>
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
                Get answers to common questions about social media marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Which social media platforms should my business be on?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    It depends on your target audience. We analyze your customer demographics and business goals to recommend the most effective platforms—whether that's Facebook, Instagram, LinkedIn, Twitter, or TikTok.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How often should we post on social media?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Posting frequency varies by platform. Generally, we recommend 1-2 posts daily on Facebook and Instagram, 3-5 tweets daily on Twitter, and 1 post daily on LinkedIn for optimal engagement.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do you create all the content?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! We handle all content creation including graphics, videos, captions, and hashtags. You can review and approve everything before it goes live on your channels.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How do you measure social media success?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We track engagement rates, follower growth, reach, impressions, website traffic, lead generation, and conversions. Monthly reports show your social media ROI clearly.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Can you handle customer service on social media?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Absolutely! Our community managers respond to comments, messages, and mentions promptly. We can escalate complex issues to your team while handling routine inquiries.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What about negative comments or reviews?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We monitor your reputation closely and respond professionally to negative feedback. Our crisis management strategies turn complaints into opportunities to showcase excellent service.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How much does social media marketing cost?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Costs vary based on the number of platforms, posting frequency, and whether you need paid advertising. We offer packages starting from affordable monthly retainers. Contact us for pricing.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Should we use organic or paid social media?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Both! Organic builds community and engagement, while paid ads expand reach and drive conversions. We recommend a balanced strategy combining both approaches for maximum impact.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">How long before we see results?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    You'll see engagement improvements within the first month. Significant follower growth and business impact typically occur within 3-6 months of consistent, strategic activity.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Can you help with influencer marketing?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes! We identify relevant influencers in your niche, negotiate partnerships, manage collaborations, and track results to ensure authentic partnerships that drive ROI.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">Do we retain ownership of the content?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    Yes, all content created for your business belongs to you. You maintain full ownership and can use it across any marketing channels you choose.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 text-2xl font-extrabold">Q</span>
                    <span className="flex-1">What if we want to cancel our contract?</span>
                  </h3>
                  <p className="text-white text-sm leading-relaxed pl-10">
                    We offer flexible contracts with reasonable notice periods. Our goal is your success, not locking you into long-term commitments. Most clients stay because they see results!
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
              Ready to Build Your Social Media Presence?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Let's create engaging content that connects with your audience and grows your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-primary bg-white rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
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
