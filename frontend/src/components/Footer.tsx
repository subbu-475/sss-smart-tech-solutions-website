import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Data Services', href: '#services' },
    { name: 'Cybersecurity', href: '#services' },
    { name: 'Content Services', href: '#services' },
    { name: 'Marketing Services', href: '#services' },
    { name: 'Tech Services', href: '#services' }
  ];

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'White Papers', href: '#' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQs', href: '#' },
    { name: 'Support', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Stay Updated with <span className="bg-gradient-to-r from-[#FEBB00] to-[#0A8836] bg-clip-text text-transparent">SSS Smart Tech</span>
              </h3>
              <p className="text-gray-400 text-lg">
                Get the latest insights on technology trends, best practices, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="lg:text-right">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md lg:ml-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#322679] focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-lg hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">SSS Smart Tech</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions, comprehensive security measures, and strategic growth initiatives.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-[#0A8836] mr-3 mt-1" />
                <span className="text-gray-400">
                  044-4613 7620<br />
                  +91-98406 34143<br />
                  +91-98408 51742
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-[#FEBB00] mr-3" />
                <span className="text-gray-400">Info@ssssmarttech.com / HR@ssssmarttech.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-[#322679] mr-3" />
                <span className="text-gray-400">Chennai, Tamilnadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FEBB00] transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#0A8836] transition-colors duration-300 flex items-center group"
                  >
                    {service.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-[#322679] transition-colors duration-300 flex items-center group"
                  >
                    {resource.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} SSS Smart Tech. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#FEBB00] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0A8836] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#322679] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
