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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* Logo and Brand Section */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0 max-w-[70%] sm:max-w-none">
            <img
              src={logoImage}
              alt="Smart Tech Logo"
              className={`h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl bg-white flex-shrink-0 ${
                isScrolled ? 'ring-2 ring-[#322679]' : ''
              }`}
            />
            <span
              className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide transition-colors duration-300 whitespace-nowrap truncate ${
                isScrolled ? 'text-[#322679] drop-shadow-sm' : 'text-white drop-shadow-lg'
              }`}
              style={{ letterSpacing: '0.02em' }}
            >
              Smart <span className="text-[#FEBB00]">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation - Hidden on screens smaller than lg */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0A8836] whitespace-nowrap ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center flex-shrink-0">
            {/* Desktop CTA Button - Only show on xl screens */}
            <div className="hidden xl:flex">
              <a
                href="#contact"
                className="inline-flex items-center px-4 lg:px-6 py-2 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white text-sm font-medium rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Mobile Menu Button - Show on screens smaller than lg */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#322679] ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4 mx-1 border border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#0A8836] transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-50 text-sm sm:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-3 border-t border-gray-200">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white text-sm font-medium rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
