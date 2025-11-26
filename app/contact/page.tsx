"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.'
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#020617] py-20 md:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1d7ba8] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d7ba8] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#1d7ba8] text-sm uppercase tracking-wider font-semibold mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital marketing? Let's discuss how we can help drive measurable results for your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                        placeholder="+91 9999999999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="ppc">PPC Management</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="content">Content Marketing</option>
                        <option value="cro">Conversion Rate Optimization</option>
                        <option value="analytics">Analytics & Reporting</option>
                        <option value="email">Email Marketing</option>
                        <option value="ecommerce">E-commerce Marketing</option>
                        <option value="all">All Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                        Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                        <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                        <option value="above-5l">Above ₹5,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d7ba8] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1d7ba8] via-[#1a6d96] to-[#1d7ba8] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-[#1d7ba8]/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to answer your questions and help you achieve your digital marketing goals. Reach out to us through any of the following channels.
                </p>

                <div className="space-y-6">
                  {/* Office Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1d7ba8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office Address</h3>
                      <p className="text-gray-300">
                        Sector 62, Noida<br />
                        Uttar Pradesh - 201309<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1d7ba8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-300">
                        info@performancemarketing.com<br />
                        sales@performancemarketing.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1d7ba8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">
                        +91 (XXX) XXX-XXXX<br />
                        Mon - Fri: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1d7ba8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-2 rounded-2xl border border-slate-700/50 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.534646789854!2d77.35399937!3d28.626137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#020617]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Transform Your Digital Presence Together
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1d7ba8] to-[#1a6d96] mx-auto mb-8"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  At STAR DIGITECH PRO, we believe that every successful digital marketing campaign begins with a conversation. Whether you're a startup looking to make your first digital footprint, an established business seeking to scale your online presence, or an enterprise aiming to optimize your marketing ROI, we're here to help you achieve your goals.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our team of certified digital marketing specialists is passionate about driving measurable results for businesses across Noida and beyond. With years of experience in performance marketing, SEO, PPC, social media marketing, and conversion optimization, we bring a wealth of expertise and proven strategies to every partnership. We don't just work for you—we work with you as dedicated partners in your success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1d7ba8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Free Consultation</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Start with a complimentary consultation where we'll discuss your business objectives, current challenges, and growth opportunities. No obligations, just honest advice and actionable insights tailored to your unique situation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1d7ba8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Quick Response Time</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We value your time. Our team typically responds to all inquiries within 24 hours on business days. For urgent matters, don't hesitate to call us directly during business hours for immediate assistance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1d7ba8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Custom Proposals</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Every business is unique, and so are our solutions. After understanding your needs, we'll create a customized proposal with clear strategies, transparent pricing, and realistic timelines that align with your budget and objectives.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1d7ba8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#1d7ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Dedicated Support</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Once you partner with us, you'll have access to a dedicated account manager who understands your business inside and out, ensuring seamless communication and consistent results throughout our collaboration.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1d7ba8]/10 to-slate-900/50 p-8 rounded-2xl border border-[#1d7ba8]/30 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Take the first step towards transforming your digital marketing results. Fill out the contact form above, give us a call, or visit our office in Sector 62, Noida. We're excited to learn about your business and explore how we can help you achieve your digital marketing goals.
                </p>
                <p className="text-[#1d7ba8] font-semibold text-lg">
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
