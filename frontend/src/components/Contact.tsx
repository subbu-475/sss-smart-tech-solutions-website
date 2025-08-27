import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use environment variable for API URL with fallback
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${apiUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log('Email sent successfully to support@ssssmarttech.com');
        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);

      // More detailed error handling
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          alert('Network error: Unable to connect to server. Please check your internet connection and try again.');
        } else {
          alert(`Failed to send message: ${error.message}. Please try again or contact us directly at support@ssssmarttech.com`);
        }
      } else {
        alert('Failed to send message. Please try again or contact us directly at support@ssssmarttech.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '044-4613 7620',
        '+91-98406 34143',
        '+91-98408 51742'
      ],
      subtitle: 'Mon-Fri 9am-6pm IST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@ssssmarttech.com',
        'hr@ssssmarttech.com',
        'support@ssssmarttech.com'
      ],
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: [
        'Karunai Sekaran Nagar 1st ST,',
        'Dr. Ambedkar Main Road, Nanmangalam,',
        'Chennai – 600 117, Tamil Nadu, India'
      ],
      subtitle: 'Tamilnadu, India'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9am-6pm IST'],
      subtitle: 'Weekend support available'
    }
  ];

  const services = [
    'Data Services',
    'Cybersecurity',
    'Content Services',
    'Marketing Services',
    'Tech Services',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5,00,000',
    '₹5,00,000 – ₹10,00,000',
    '₹10,00,000 – ₹20,00,000',
    '₹20,00,000 – ₹50,00,000',
    '₹50,00,000+',
    'Not sure yet'
  ];

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-[#322679] via-[#322679]/80 to-[#0A8836] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FEBB00] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#0A8836] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FEBB00] rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Start Your <span className="bg-gradient-to-r from-[#FEBB00] to-[#0A8836] bg-clip-text text-transparent">Digital Journey</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#322679] to-[#0A8836] rounded-xl flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-white/90">{line}</p>
                      ))}
                      {info.subtitle && (
                        <p className="text-sm text-white/70 mt-1">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sss-smart-tech-sss-smart-tech-6b9477335"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin className="text-white text-lg" />
                  </a>
                  <a
                    href="https://facebook.com/SSSSmartTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <FaFacebook className="text-white text-lg" />
                  </a>
                  <a
                    href="https://twitter.com/SSSSmartTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <FaXTwitter className="text-white text-lg" />
                  </a>
                  <a
                    href="https://github.com/SSSSmartTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-[#0A8836] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully to support@ssssmarttech.com. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="tel:+919840634143"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone className="h-8 w-8 text-[#0A8836] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-semibold text-white mb-2">Call Us Now</h4>
            <p className="text-white/70">Get immediate assistance</p>
          </a>

          <a
            href="mailto:support@ssssmarttech.com"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail className="h-8 w-8 text-[#FEBB00] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-semibold text-white mb-2">Email Support</h4>
            <p className="text-white/70">24-hour response guaranteed</p>
          </a>

          <a
            href="#"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Clock className="h-8 w-8 text-[#322679] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-semibold text-white mb-2">Schedule Call</h4>
            <p className="text-white/70">Book a consultation</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
