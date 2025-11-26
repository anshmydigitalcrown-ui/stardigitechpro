import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | STAR DIGITECH PRO",
  description: "Learn about our mission, values, and team dedicated to delivering exceptional digital marketing results in Noida.",
  openGraph: {
    title: "About Us | STAR DIGITECH PRO",
    description: "Learn about our mission, values, and team dedicated to delivering exceptional digital marketing results in Noida.",
    url: 'https://stardigitechpro.vercel.app/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app/about',
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Head of Strategy",
      image: "👩‍💼"
    },
    {
      name: "Amit Singh",
      role: "PPC Specialist",
      image: "👨‍💻"
    },
    {
      name: "Neha Gupta",
      role: "SEO Manager",
      image: "👩‍💻"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line"
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "Clear communication and honest reporting in everything we do"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Staying ahead of digital trends to give our clients a competitive edge"
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Committed to delivering the highest quality service in every project"
    },
    {
      icon: "📊",
      title: "Data-First",
      description: "Every decision backed by analytics and performance metrics"
    },
    {
      icon: "💼",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, invested in your success"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-slate-800 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">#1 Performance Marketing Agency in Noida</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About STAR DIGITECH PRO
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                We're a team of passionate digital marketing experts dedicated to helping businesses in Noida achieve exceptional growth through performance-driven strategies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-white font-semibold">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">👥</span>
                  <span className="text-white font-semibold">200+ Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.webp.webp"
                  alt="STAR DIGITECH PRO Team - Digital Marketing Experts"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2019, STAR DIGITECH PRO emerged from a simple belief: that every marketing rupee should deliver measurable results. We started with a small team of dedicated professionals who were frustrated with traditional marketing agencies that couldn't prove ROI.
                </p>
                <p>
                  Today, we've grown into one of Noida's most trusted performance marketing agencies, serving over 200 clients across various industries. Our success stems from our unwavering commitment to data-driven strategies and transparent reporting.
                </p>
                <p>
                  What sets us apart is our local expertise combined with global best practices. We understand the Noida market inside out, while implementing cutting-edge digital marketing techniques used by leading agencies worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Performance Marketing Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#020617] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses in Noida with digital marketing strategies that drive measurable growth, maximize ROI, and create lasting competitive advantages in the digital landscape.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 border-l-4 border-secondary">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become India's most trusted digital marketing agency, known for innovation, transparency, and exceptional results that transform businesses and set new industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#020617] bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-2xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-8xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Achievements</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-300 font-medium">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">₹50Cr+</div>
              <div className="text-gray-300 font-medium">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">300%</div>
              <div className="text-gray-300 font-medium">Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Why Partner With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Deep understanding of the Noida market, consumer behavior, and local business landscape
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">
                    5+ years of consistently delivering exceptional results for businesses of all sizes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-300">
                    Leveraging the latest tools and platforms to maximize campaign performance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">
                    A dedicated account manager and support team available whenever you need us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#020617] bg-opacity-95 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the 200+ businesses in Noida who trust us with their digital marketing
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
