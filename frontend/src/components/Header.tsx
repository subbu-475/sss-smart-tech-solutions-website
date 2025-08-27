import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImage from '../assets/navbar/ssssmarttech_original.png'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-5">
            <img
              src={logoImage}
              alt="Smart Tech Logo"
              className={`h-16 w-16 object-contain shadow-xl transition-all duration-300  rounded-xl bg-white ${isScrolled ? 'ring-2 ring-[#322679]' : ''
                }`}
            />
            <span
              className={`text-3xl font-extrabold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#322679] drop-shadow-sm' : 'text-white drop-shadow-lg'
                }`}
              style={{ letterSpacing: '0.02em' }}
            >
              Smart <span className="text-[#FEBB00]">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0A8836] ${isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white text-sm font-medium rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0A8836] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white text-sm font-medium rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
