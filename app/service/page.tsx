import Link from "next/link";

export const metadata = {
  title: "Our Services | STAR DIGITECH PRO",
  description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
  openGraph: {
    title: "Our Services | STAR DIGITECH PRO",
    description: "Explore our comprehensive digital marketing services including PPC, SEO, social media marketing, content marketing, and more.",
    url: 'https://stardigitechpro.vercel.app/service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app/service',
  },
};

export default function ServicePage() {
  const services = [
    {
      id: 1,
      icon: "🎯",
      title: "PPC Management",
      description: "Maximize your ROI with strategic pay-per-click advertising campaigns across Google Ads, Bing, and social media platforms.",
      features: [
        "Google Ads & Bing Ads Management",
        "Campaign Strategy & Planning",
        "Keyword Research & Optimization",
        "Ad Copy Creation & A/B Testing",
        "Conversion Rate Optimization",
        "Detailed Performance Analytics"
      ]
    },
    {
      id: 2,
      icon: "📈",
      title: "Search Engine Optimization",
      description: "Improve your organic visibility and drive sustainable traffic with comprehensive SEO strategies tailored to your business.",
      features: [
        "Technical SEO Audit & Fixes",
        "On-Page Optimization",
        "Off-Page & Link Building",
        "Local SEO for Noida Businesses",
        "Content Strategy & Optimization",
        "Keyword Research & Analysis"
      ]
    },
    {
      id: 3,
      icon: "📱",
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your target audience across all major social media platforms with creative campaigns.",
      features: [
        "Facebook & Instagram Marketing",
        "LinkedIn B2B Marketing",
        "Twitter & YouTube Promotion",
        "Content Creation & Scheduling",
        "Community Management",
        "Social Media Analytics"
      ]
    },
    {
      id: 4,
      icon: "✍️",
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions through every stage of the buyer's journey.",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Production",
        "Infographics & Visual Content",
        "E-books & Whitepapers",
        "Email Marketing Campaigns"
      ]
    },
    {
      id: 5,
      icon: "🔄",
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with data-driven CRO strategies that optimize every touchpoint of your customer journey.",
      features: [
        "Landing Page Optimization",
        "A/B & Multivariate Testing",
        "User Experience Analysis",
        "Heat Mapping & Session Recording",
        "Funnel Optimization",
        "Performance Tracking"
      ]
    },
    {
      id: 6,
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Make informed decisions with comprehensive analytics and transparent reporting that shows exactly how your campaigns perform.",
      features: [
        "Google Analytics Setup & Tracking",
        "Custom Dashboard Creation",
        "Monthly Performance Reports",
        "ROI & KPI Tracking",
        "Competitor Analysis",
        "Data-Driven Recommendations"
      ]
    },
    {
      id: 7,
      icon: "📧",
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships with targeted email campaigns that drive engagement and conversions.",
      features: [
        "Email Campaign Strategy",
        "List Segmentation & Management",
        "Template Design & Coding",
        "Automation Workflows",
        "A/B Testing & Optimization",
        "Deliverability Monitoring"
      ]
    },
    {
      id: 8,
      icon: "🛒",
      title: "E-commerce Marketing",
      description: "Boost your online store's performance with specialized e-commerce marketing strategies that increase sales and customer lifetime value.",
      features: [
        "Product Feed Optimization",
        "Shopping Ads Management",
        "Retargeting Campaigns",
        "Cart Abandonment Recovery",
        "Customer Retention Strategies",
        "Marketplace Integration"
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Digital Marketing Services',
            provider: {
              '@type': 'Organization',
              name: 'STAR DIGITECH PRO',
            },
            areaServed: 'Noida, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Digital Marketing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'PPC Management',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Optimization',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Social Media Marketing',
                  },
                },
              ],
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-slate-800 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive performance marketing solutions designed to accelerate your business growth in Noida and beyond
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#2596be]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card hover:scale-[1.02] transition-transform duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2596be] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">
                We analyze your business, goals, and target audience to create a customized strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">
                Develop comprehensive marketing plans with clear KPIs and timelines
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
              <p className="text-gray-300">
                Launch and manage campaigns with continuous monitoring and optimization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reporting</h3>
              <p className="text-gray-300">
                Provide transparent reports and data-driven insights for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2596be] bg-opacity-95 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a custom marketing strategy that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
