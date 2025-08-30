import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

import ApecLogo from "../assets/logos/apex.png";
import TholgaLogo from "../assets/logos/tholga.png";
import TechnaviousLogo from "../assets/logos/tech.png";
import UniqueLogo from "../assets/logos/unique.png";
import IigemLogo from "../assets/logos/iigm.png";
import UtasLogo from "../assets/logos/uta.png";
import CycatzLogo from "../assets/logos/cycatz.png";
import CytrustLogo from "../assets/logos/cytrust.png";

const companies = [
  { name: "Apex Covantage", logo: ApecLogo },
  { name: "Tholga Publishing Services", logo: TholgaLogo },
  { name: "Technavious", logo: TechnaviousLogo },
  { name: "Unique Engineering Groups", logo: UniqueLogo },
  { name: "IIGEM", logo: IigemLogo },
  { name: "UTAS", logo: UtasLogo },
  { name: "Cycatz", logo: CycatzLogo },
  { name: "Cytrust", logo: CytrustLogo },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Director',
      company: 'Apex Covantage',
      avatar: 'https://images.pexels.com/photos/7397453/pexels-photo-7397453.jpeg',
      rating: 5,
      text: 'SSS Smart Tech transformed our entire data infrastructure. Their expertise in data modernization helped us reduce costs by 60% while improving performance dramatically. The team is incredibly professional and responsive.',
      project: 'Data Warehouse Migration'
    },
    {
      name: 'Santhysh Kumar',
      position: 'AVP',
      company: 'Tholga Publishing Services',
      avatar: 'https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg',
      rating: 5,
      text: 'The cybersecurity solutions provided by SSS Smart Tech exceeded our expectations. Their comprehensive approach to security has given us complete peace of mind. Zero incidents since implementation.',
      project: 'Enterprise Security Overhaul'
    },
    {
      name: 'Ravi Kumar',
      position: 'Marketing Director',
      company: 'Technavious',
      avatar: 'https://images.pexels.com/photos/5528835/pexels-photo-5528835.jpeg',
      rating: 5,
      text: 'Their digital marketing strategy increased our online presence by 300%. The content quality and SEO expertise are unmatched. SSS Smart Tech truly understands how to drive results.',
      project: 'Digital Marketing Campaign'
    },
    {
      name: 'Deepak Patel',
      position: 'VP',
      company: 'Unique Engineering Groups',
      avatar: 'https://images.pexels.com/photos/11725088/pexels-photo-11725088.jpeg',
      rating: 5,
      text: 'The full-stack development team delivered our platform ahead of schedule. The code quality is exceptional, and the user experience is exactly what we envisioned. Highly recommended!',
      project: 'E-commerce Platform Development'
    },
    {
      name: 'Dinesh Kumar',
      position: 'AVP',
      company: 'IIGEM',
      avatar: 'https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg',
      rating: 5,
      text: 'Working with SSS Smart Tech has been a game-changer. Their attention to detail and commitment to excellence is evident in every project. They truly care about client success.',
      project: 'Business Process Automation'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Handle responsive logo count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(2); // Mobile: 2 logos
      } else if (width < 768) {
        setVisibleCount(3); // Small tablet: 3 logos
      } else if (width < 1024) {
        setVisibleCount(4); // Tablet: 4 logos
      } else {
        setVisibleCount(5); // Desktop: 5 logos
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logos
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 3000);
    return () => clearInterval(logoInterval);
  }, []);

  // Get visible logos based on screen size
  const getVisibleLogos = () => {
    const visibleLogos = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (logoIndex + i) % companies.length;
      visibleLogos.push({ ...companies[index], id: `${index}-${i}` });
    }
    return visibleLogos;
  };

  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-[#322679] to-[#0A8836] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with SSS Smart Tech.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="h-24 w-24 text-[#322679]" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-8 right-8 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#322679] font-medium">{testimonials[currentIndex].position}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FEBB00] fill-current" />
                ))}
                <span className="ml-2 text-gray-600">({testimonials[currentIndex].rating}.0)</span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Project Tag */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white rounded-full text-sm font-medium">
                {testimonials[currentIndex].project}
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-gradient-to-r from-[#322679] to-[#0A8836] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Responsive Client Logos Carousel */}
        <div className="mt-20">
          <p className="text-center text-gray-600 mb-8 text-lg font-medium">
            Trusted by Industry Leaders
          </p>
          
          <div className="relative overflow-hidden px-2">
            {/* Container for scrolling logos with proper spacing */}
            <div className="flex justify-center">
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 items-start transition-transform duration-500 ease-in-out">
                {getVisibleLogos().map((company, index) => (
                  <div
                    key={company.id}
                    className="flex flex-col items-center text-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ minWidth: 'fit-content', maxWidth: '120px' }}
                  >
                    <div className="h-16 w-20 sm:w-24 md:w-28 flex items-center justify-center mb-3">
                      <img
                        src={company.logo}
                        alt={`${company.name} Logo`}
                        className="max-h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight px-1 max-w-full overflow-hidden">
                      <div className="truncate" title={company.name}>
                        {company.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Progress indicator dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLogoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === logoIndex
                      ? 'bg-gradient-to-r from-[#322679] to-[#0A8836] w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
