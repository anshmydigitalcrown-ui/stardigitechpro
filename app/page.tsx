import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#2596be] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Performance Marketing in Noida
                <br />
                <span className="text-primary">Drive Results with Data-Driven Campaigns</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Transform your business with performance marketing strategies that deliver measurable ROI. We specialize in data-driven campaigns, conversion optimization, and performance-based advertising tailored for your growth in Noida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact" className="btn-primary">
                  Get Free Consultation
                </Link>
                <Link
                  href="/service"
                  className="bg-white bg-opacity-20 text-white border-2 border-white hover:bg-white hover:text-[#2596be] font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/hero.webg.webp"
                  alt="Performance Marketing Services"
                  width={600}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2596be] bg-opacity-90 text-white border-y border-white border-opacity-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-300">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300%</div>
              <div className="text-gray-300">Average ROI Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#2596be]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Performance Marketing Services</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable results and accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">PPC Management</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Strategic paid advertising campaigns to drive qualified traffic and maximize conversions
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Boost organic rankings with proven SEO strategies that increase visibility and traffic
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Engage your audience and build brand loyalty across all social media platforms
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">✍️</div>
              <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Create compelling content that resonates with your audience and drives conversions
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Conversion Rate Optimization</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Turn more visitors into customers with data-driven CRO strategies
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics & Reporting</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Make informed decisions with comprehensive analytics and transparent reporting
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 7 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📧</div>
              <h3 className="text-xl font-bold text-white mb-3">Email Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Nurture leads and maintain customer relationships with targeted email campaigns
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 8 */}
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">E-commerce Marketing</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                Boost your online store's performance with specialized e-commerce strategies
              </p>
              <Link href="/service" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#2596be] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven Approach</h3>
                <p className="text-gray-300">
                  Every decision backed by analytics and real-time performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                <p className="text-gray-300">
                  Clear, comprehensive reports showing exactly where your budget goes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Focused</h3>
                <p className="text-gray-300">
                  We optimize campaigns for maximum return on your investment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with years of experience in performance marketing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-300">
                  Tailored strategies that align with your unique business goals
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">
                  Dedicated support team always available to address your concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
