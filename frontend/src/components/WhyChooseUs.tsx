import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Award, Zap, Shield, TrendingUp } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Clock,
      title: '2+ Years Experience',
      description: 'Proven track record of delivering exceptional technology solutions across diverse industries.',
      stat: '1000+',
      statLabel: 'Hours Saved'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with deep expertise in cutting-edge technologies and industry best practices.',
      stat: '50+',
      statLabel: 'Specialists'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure flawless delivery every time.',
      stat: '99.9%',
      statLabel: 'Success Rate'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Agile methodologies and streamlined processes for faster time-to-market solutions.',
      stat: '2x',
      statLabel: 'Faster Delivery'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures and compliance with international security standards.',
      stat: '100%',
      statLabel: 'Secure'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof architectures that grow with your business and adapt to changing needs.',
      stat: '500%',
      statLabel: 'Growth Potential'
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section
      ref={ref}
      className="py-10 bg-gradient-to-br from-[#322679] via-[#322679]/80 to-[#0A8836] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FEBB00] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#0A8836] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FEBB00] rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-[#322679] rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: 'easeOut' }
            }
          }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#FEBB00] to-[#0A8836] bg-clip-text text-transparent">
              SSS Smart Tech
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto ">
            We combine technical excellence with business acumen to deliver
            solutions that drive real results and sustainable growth.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: 'easeOut' }
                }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#322679]/20 to-[#0A8836]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#322679] to-[#0A8836] rounded-xl flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{reason.stat}</div>
                    <div className="text-sm text-white/70">{reason.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-white/80 leading-relaxed text-justify">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.8 } } : {}}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
            <Award className="h-5 w-5 text-[#FEBB00] mr-2" />
            Trusted by 150+ Companies
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
