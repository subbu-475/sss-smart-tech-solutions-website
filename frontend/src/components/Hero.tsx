import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#322679] via-[#322679]/80 to-[#0A8836]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FEBB00] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#0A8836] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FEBB00] rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-[#322679] rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fadeInUp">
              <Star className="h-4 w-4 text-[#FEBB00] mr-2" />
              #1 Tech Solutions Provider
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.25] animate-fadeInUp delay-200 overflow-visible">
              Transform Your
              <span className="block bg-gradient-to-r from-[#FEBB00] to-[#0A8836] bg-clip-text text-transparent pb-2">
                Digital Future
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fadeInUp delay-400 text-justify">
              {"At SSS Smart Tech, we deliver end-to-end data warehousing modernization along with a broad suite of digital solutions. From discovery to integration, our experts apply advanced data management, data engineering, visualization and modeling techniques to ensure reliable, high-quality data. We streamline ETL processes, enhance consistency, and use powerful visualization tools to unlock actionable insights. Beyond data, our services span Full-Stack Development, Language Editing (L1/L2/L3), Cybersecurity, Talent Management, and Career Support for College Students/Aspirants. With this comprehensive portfolio, we empower businesses and individuals to make informed decisions, build secure systems, and achieve sustainable growth."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeInUp delay-600">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              {/* <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fadeInUp delay-800">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-[#0A8836]" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={10} duration={5} />+
                </div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Award className="h-6 w-6 text-[#322679]" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={50} duration={5} />+
                </div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Star className="h-6 w-6 text-[#FEBB00]" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={4.9} duration={5} decimals={1} />
                </div>
                <div className="text-sm text-white/70">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-fadeInUp delay-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#322679]/30 to-[#0A8836]/30 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Technology Workspace"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-2xl font-bold text-[#322679]"><CountUp end={99.9} duration={5} decimals={2} />%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float delay-500">
                <div className="text-2xl font-bold text-[#0A8836]">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
