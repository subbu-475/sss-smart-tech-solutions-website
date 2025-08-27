import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, PenTool, TrendingUp, Code, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Services',
      caseStudies: 'data-services',
      subtitle: 'Unlock the Power of Your Data',
      description: 'End-to-end data solutions from governance to analytics, helping you derive maximum value from your data assets.',
      features: [
        'Data Governance (Data Quality, Data Catalog, Data Lineage, MDM)',
        'Cloud Data modernization',
        'Data Integration & Migration (ETL/ELT, Data Warehouse, Data Lake migration / conversion)',
        'Data Analytics & Visualization'
      ],
      color: 'from-[#322679] to-[#0A8836]',
      bgColor: 'bg-purple-50',
      textColor: 'text-[#322679]',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Code,
      title: 'Tech Services',
      caseStudies: 'full-stack-development',
      subtitle: 'Full-Stack Excellence',
      description: 'Complete web development solutions using cutting-edge technologies like MERN stack and modern frameworks.',
      features: [
        'MERN Stack Development',
        'Cloud Architecture & DevOps',
        'Mobile App Development',
        'API Design & Integration'
      ],
      color: 'from-[#0A8836] to-[#322679]',
      bgColor: 'bg-green-50',
      textColor: 'text-[#0A8836]',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      caseStudies: 'cybersecurity',
      subtitle: 'Fortress-Level Protection',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity in the modern threat landscape.',
      features: [
        'Cyber Attack Surface Management- CASM (Identifying, monitoring, and mitigating vulnerabilities)',
        'Cloud Security Posture Management - CSPM (Protecting data, applications, and infrastructures in cloud environments)',
        'AI Driven Governance, Risk and Compliance - GRC (Using AI to improve Governance, Risk Management, Compliance)',
        'Third Party Risk Management (Assessing and managing the risks associated with third-party suppliers)',
        'Brand Monitoring (Continuously tracking and analyzing public mentions of a brand to protect reputation)'
      ],
      color: 'from-[#322679] to-[#FEBB00]',
      bgColor: 'bg-yellow-50',
      textColor: 'text-[#322679]',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: PenTool,
      title: 'Content Services',
      caseStudies: 'content-services',
      subtitle: 'Words That Convert',
      description: 'Professional content services that ensure clarity, accuracy, and engagement across all your communications.',
      features: [
        'Professional Language / Copy Editing (L1/L2/L3)',
        'Proofreading & Quality Assurance',
        'Content Strategy & Writing',
        'Technical Documentation Services'
      ],
      color: 'from-[#0A8836] to-[#FEBB00]',
      bgColor: 'bg-green-50',
      textColor: 'text-[#0A8836]',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Services',
      caseStudies: 'marketing-services',
      subtitle: 'Growth That Scales',
      description: 'Data-driven digital marketing strategies that amplify your brand presence and accelerate business growth.',
      features: [
        'Digital Marketing Strategy',
        'SEO & Content Marketing',
        'PPC & Social Media Ads',
        'Marketing Analytics & ROI'
      ],
      color: 'from-[#FEBB00] to-[#322679]',
      bgColor: 'bg-yellow-50',
      textColor: 'text-[#FEBB00]',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-[#322679] to-[#0A8836] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business and accelerate growth through innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Content Block */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-3">
                  <div
                    className={`w-11 h-11 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4`}
                  >
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-md text-gray-600">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-md text-gray-700 mb-6">{service.description}</p>

                {/* Consistent Two-Column Feature List */}
                <div className={`mb-6 ${service.features.length > 4 ? 'grid grid-cols-1' : 'grid grid-cols-1 sm:grid-cols-2'} gap-x-6 gap-y-3`}>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mt-2 mr-3"></div>
                      <span
                        className="text-md text-gray-700 leading-relaxed text-justify"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className={`inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-full hover:shadow-md transform hover:scale-105 transition-all duration-300`}
                  onClick={() => {
                    const el = document.getElementById(service.caseStudies);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      el.classList.add('border-4', 'border-[#322679]', 'transition-all');
                      setTimeout(() => {
                        el.classList.remove('border-4', 'border-[#322679]', 'transition-all');
                      }, 2000);
                    }
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Image Block */}
              <motion.div
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-3xl blur-xl`}
                  />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-72 sm:h-80 object-cover rounded-3xl shadow-xl"
                  />
                  <div
                    className={`absolute -bottom-5 -right-5 ${service.bgColor} rounded-xl p-3 shadow-lg border border-white`}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className={`h-5 w-5 ${service.textColor}`} />
                      <span className="text-sm font-semibold text-gray-800">Professional</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
