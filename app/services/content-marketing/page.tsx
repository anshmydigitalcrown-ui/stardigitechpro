import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Marketing Services | STAR DIGITECH PRO',
  description: 'Professional content marketing services in Noida. Create compelling content that resonates with your audience and drives conversions.',
  keywords: 'content marketing, content strategy, blog writing, content creation, Noida',
};

export default function ContentMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#020617] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-5xl">✍️</span>
              <span className="text-primary font-semibold">Content Marketing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Content That Converts and{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Captivates
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Create compelling content that resonates with your audience, builds authority, and drives measurable business results across all channels.
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
                Why Content Marketing Matters
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Build trust, authority, and long-term customer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Authority</h3>
                <p className="text-white leading-relaxed">
                  Establish your business as an industry leader with valuable, informative content that showcases expertise.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Targeted Traffic</h3>
                <p className="text-white leading-relaxed">
                  Attract qualified leads through SEO-optimized content that answers customer questions and solves problems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3">Higher ROI</h3>
                <p className="text-white leading-relaxed">
                  Content marketing costs 62% less than traditional marketing and generates 3x more leads per dollar spent.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-white mb-3">Long-Term Results</h3>
                <p className="text-white leading-relaxed">
                  Quality content continues driving traffic and conversions months or even years after publication.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Trust</h3>
                <p className="text-white leading-relaxed">
                  Build trust through valuable content that educates, informs, and helps customers make informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Channel Impact</h3>
                <p className="text-white leading-relaxed">
                  Repurpose content across blogs, social media, email, and more to maximize reach and engagement.
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
                Comprehensive Content Services
              </h2>
              <p className="text-white text-lg">
                Everything you need for a successful content strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Content Strategy Development</h3>
                  <p className="text-white text-sm">
                    Custom content roadmap aligned with business goals, audience research, competitor analysis, and content gap identification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Blog Writing & SEO</h3>
                  <p className="text-white text-sm">
                    Engaging, SEO-optimized blog posts that rank on Google, attract organic traffic, and convert readers into customers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Website Content & Copywriting</h3>
                  <p className="text-white text-sm">
                    Compelling website copy, landing pages, product descriptions, and service pages that convert visitors into leads.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Social Media Content</h3>
                  <p className="text-white text-sm">
                    Engaging posts, captions, and visual content for Facebook, Instagram, LinkedIn, Twitter, and other platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Video Scripts & Storyboards</h3>
                  <p className="text-white text-sm">
                    Professional scripts for explainer videos, tutorials, product demos, and social media video content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Newsletters</h3>
                  <p className="text-white text-sm">
                    Engaging email content that nurtures leads, maintains customer relationships, and drives repeat business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Infographics & Visual Content</h3>
                  <p className="text-white text-sm">
                    Data visualization, infographics, and visual content that simplifies complex information and boosts engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Content Distribution & Promotion</h3>
                  <p className="text-white text-sm">
                    Strategic content distribution across multiple channels, influencer outreach, and paid promotion for maximum reach.
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
              Ready to Create Content That Converts?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Let's develop a content strategy that drives real business results
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
