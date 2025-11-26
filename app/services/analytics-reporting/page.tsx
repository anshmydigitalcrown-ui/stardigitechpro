import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics & Reporting Services | STAR DIGITECH PRO',
  description: 'Expert analytics and reporting services in Delhi. Make data-driven decisions with comprehensive analytics, real-time dashboards, and transparent reporting.',
  keywords: 'analytics, reporting, data analysis, Google Analytics, performance tracking, Delhi',
};

export default function AnalyticsReportingPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Analytics & Reporting Services',
            provider: {
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
              url: 'https://stardigitechpro.vercel.app'
            },
            areaServed: 'Delhi, India',
            description: 'Expert analytics and reporting services including Google Analytics setup, data visualization, and performance tracking.',
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
                name: 'Analytics & Reporting',
                item: 'https://stardigitechpro.vercel.app/services/analytics-reporting'
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
              <span className="text-5xl">📊</span>
              <span className="text-primary font-semibold">Analytics & Reporting</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our Digital Marketing Services:{' '}
              <span className="bg-gradient-to-r from-primary via-[#1d7ba8] to-primary bg-clip-text text-transparent">
                Data-Driven Analytics & Insights
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Make informed business decisions with comprehensive analytics, real-time dashboards, and transparent reporting that reveals actionable insights.
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
              Why Choose Our Analytics & Reporting Services?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Transform raw data into actionable insights that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Dashboards</h3>
              <p className="text-gray-300">
                Access live performance data with custom dashboards that provide instant visibility into all your marketing metrics.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Actionable Insights</h3>
              <p className="text-gray-300">
                Get clear, actionable recommendations based on data analysis to optimize campaigns and improve ROI.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Comprehensive Reports</h3>
              <p className="text-gray-300">
                Detailed monthly reports covering all aspects of your digital marketing performance with easy-to-understand visualizations.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ROI Tracking</h3>
              <p className="text-gray-300">
                Track return on investment for every campaign and channel to understand what's driving revenue and what needs improvement.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Metrics</h3>
              <p className="text-gray-300">
                Track custom KPIs specific to your business goals and industry, beyond standard marketing metrics.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1d7ba8]/20 to-[#1d7ba8]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Audience Insights</h3>
              <p className="text-gray-300">
                Deep understanding of your audience demographics, behavior, and preferences to inform marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Track */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Track & Report
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive tracking across all your digital marketing channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Metric 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Website Analytics</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Traffic & Sessions</li>
                <li>• Bounce Rate</li>
                <li>• Page Views</li>
                <li>• User Behavior</li>
                <li>• Conversion Rates</li>
              </ul>
            </div>

            {/* Metric 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Campaign Performance</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Ad Spend & ROI</li>
                <li>• Click-Through Rates</li>
                <li>• Cost Per Acquisition</li>
                <li>• Quality Score</li>
                <li>• Conversion Value</li>
              </ul>
            </div>

            {/* Metric 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">SEO Metrics</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Keyword Rankings</li>
                <li>• Organic Traffic</li>
                <li>• Backlink Profile</li>
                <li>• Domain Authority</li>
                <li>• Search Visibility</li>
              </ul>
            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Engagement Rates</li>
                <li>• Follower Growth</li>
                <li>• Reach & Impressions</li>
                <li>• Social Conversions</li>
                <li>• Content Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Got questions about Analytics & Reporting? We've got answers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Why is analytics important for my business?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Analytics provides data-driven insights into customer behavior, campaign performance, and ROI. It helps you make informed decisions, optimize marketing spend, and identify growth opportunities.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What analytics tools do you use?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We work with Google Analytics 4, Google Tag Manager, Data Studio, Facebook Analytics, LinkedIn Analytics, and custom dashboards tailored to your specific business needs.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How often will I receive reports?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We provide comprehensive monthly reports with key insights and recommendations. Real-time dashboards are available 24/7, and we can schedule weekly or custom reporting as needed.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you track conversions from multiple channels?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We set up cross-channel attribution to track the customer journey across all touchpoints—from first click to conversion—giving you a complete view of marketing performance.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What metrics should I focus on?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Key metrics vary by business goals but typically include traffic, conversion rates, ROI, customer acquisition cost, lifetime value, bounce rate, and engagement metrics. We prioritize what matters most to your business.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Do you set up Google Analytics 4?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We handle complete GA4 setup, migration from Universal Analytics, custom event tracking, conversion tracking, and ongoing optimization to ensure accurate data collection.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you create custom dashboards?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Absolutely! We build custom dashboards in Looker Studio (Data Studio) or other platforms, tailored to your KPIs, providing visual, easy-to-understand insights at a glance.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How do you ensure data accuracy?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  We implement proper tracking codes, regularly audit analytics setup, filter spam traffic, test conversion tracking, and validate data integrity to ensure you're making decisions based on accurate information.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">What's included in your monthly reports?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Reports include performance summaries, traffic analysis, conversion tracking, campaign results, trends, insights, recommendations, and action plans—all presented in clear, understandable formats.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you track offline conversions?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Yes! We can integrate CRM data, phone call tracking, in-store visits, and other offline conversions to provide a complete picture of how digital marketing drives all business outcomes.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">How much do analytics services cost?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Pricing varies based on complexity and reporting needs. Basic analytics setup and monthly reporting start from ₹15,000/month. Enterprise solutions are customized to your requirements.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#1d7ba8] flex-shrink-0 text-2xl font-extrabold">Q</span>
                  <span className="flex-1">Can you help us understand the data?</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-10">
                  Absolutely! We don't just provide numbers—we translate data into actionable insights, explain what metrics mean for your business, and recommend strategies to improve performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Make Data-Driven Decisions?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's set up comprehensive analytics and reporting to track your success and optimize for maximum ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary text-white font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get Free Analytics Setup
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
