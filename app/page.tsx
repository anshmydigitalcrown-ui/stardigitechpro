import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Drive Results with
                <span className="text-primary"> STAR DIGITECH PRO</span>
                <br />Digital Marketing in Noida
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Transform your digital presence with data-driven marketing strategies that deliver measurable ROI. We specialize in results-oriented campaigns tailored for your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact" className="btn-primary">
                  Get Free Consultation
                </Link>
                <Link
                  href="/service"
                  className="bg-slate-700 text-white border-2 border-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/logo.jpg"
                  alt="Performance Marketing Services"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950 text-white border-y border-slate-800">
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to maximize your online performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group hover:border-primary border-2 border-transparent">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">PPC Management</h3>
              <p className="text-gray-300 mb-4">
                Strategic paid advertising campaigns on Google Ads, Facebook, and more to drive qualified traffic and conversions.
              </p>
              <Link href="/service" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="card group hover:border-primary border-2 border-transparent">
              <div className="text-secondary text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
              <p className="text-gray-300 mb-4">
                Boost your organic rankings with proven SEO strategies that increase visibility and drive sustainable growth.
              </p>
              <Link href="/service" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="card group hover:border-primary border-2 border-transparent">
              <div className="text-accent text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
              <p className="text-gray-300 mb-4">
                Engage your audience and build brand loyalty with targeted social media campaigns across all platforms.
              </p>
              <Link href="/service" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our performance marketing strategies can drive measurable growth for your business in Noida.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
