import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign, Shield, Database } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'IICS Migration for Enterprise Data Integration',
      category: 'Data Services',
      id: 'iics-migration',
      description:
        'Migrated legacy Informatica on-premise environment to Informatica Intelligent Cloud Services (IICS) ensuring minimal downtime, improved scalability, and enhanced performance for enterprise data integration.',
      image:
        'https://images.pexels.com/photos/1181272/pexels-photo-1181272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '99.9%', label: 'Uptime Post-Migration', icon: TrendingUp },
        { metric: '30%', label: 'Improved Performance', icon: TrendingUp },
        { metric: '50%', label: 'Maintenance Cost Reduction', icon: DollarSign }
      ],
      tags: ["IICS", "AWS S3 / Redshift", "Active Batch", "Azure DevOps - CI/CD"],
      color: 'from-[#322679] to-[#0A8836]'
    },
    {
      title: 'IDH Implementation for Master Data Management',
      category: 'Data Services',
      id: 'idh-implementation',
      description:
        'Implemented Informatica Data Hub (IDH) for centralized master data management, improving data consistency and enabling real-time data sharing across business units.',
      image:
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '95%', label: 'Data Consistency', icon: TrendingUp },
        { metric: '80%', label: 'Integration Efficiency', icon: Users },
        { metric: '$1.5M', label: 'Annual Savings', icon: DollarSign }
      ],
      tags: ["IICS", "AWS S3 / REDSHIFT / LAMBDA", "MongoDB", "CRM 365", "Node.js", "AZURE DevOps"],
      color: 'from-[#0A8836] to-[#322679]'
    },
    {
      title: 'PL/SQL Reports Migration to BO & Power BI',
      category: 'Data Visualization',
      id: 'plsql-to-bi',
      description:
        'Migrated complex PL/SQL-based reporting framework to modern BusinessObjects (BO) and Power BI platforms, enhancing reporting flexibility and self-service analytics.',
      image:
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '60%', label: 'Faster Report Generation', icon: TrendingUp },
        { metric: '100%', label: 'User Adoption', icon: Users },
        { metric: '40%', label: 'Operational Efficiency', icon: DollarSign }
      ],
      tags: ["PL/SQL", "SQL", "Power BI", "BO R4", "Active Batch"],
      color: 'from-[#0A8836] to-[#FEBB00]'
    },
    {
      title: 'AI ChatBot Implementation for Customer Support',
      category: 'Tech Services',
      id: 'chatbot-implementation',
      description:
        'Developed and deployed an AI-powered chatbot integrated with enterprise CRM, automating FAQs, lead qualification, and support ticket creation for improved customer experience.',
      image:
        'https://images.pexels.com/photos/8386367/pexels-photo-8386367.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '70%', label: 'Reduced Response Time', icon: TrendingUp },
        { metric: '50%', label: 'Improved Lead Conversion', icon: Users },
        { metric: '35%', label: 'Support Cost Savings', icon: DollarSign }
      ],
      tags: ['AWS Sagemaker', 'NLP', 'React.js', 'Node.js', 'Python', 'MongoDB'],
      color: 'from-[#322679] to-[#FEBB00]'
    },
    {
      title: 'E-Commerce Platform Transformation',
      client: 'RetailTech Inc.',
      category: 'Full-Stack Development',
      id: 'full-stack-development',
      description:
        'Complete redesign and development of a modern e-commerce platform with integrated payment processing, inventory management, and customer analytics.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '0%', label: 'Gap in Sales', icon: DollarSign },
        { metric: '50%', label: 'Faster Load Times', icon: TrendingUp },
        { metric: '200%', label: 'User Engagement', icon: Users }
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', "CSS", "JAVA", "PostgreSQL"],
      color: 'from-[#FEBB00] to-[#322679]'
    },
    {
      title: 'Enterprise Data Governance Implementation',
      category: 'Data Services',
      id: 'data-services',
      description:
        'Implemented comprehensive data governance framework including data quality, catalog, lineage and MDM solutions for a multinational financial institution.',
      image:
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '95%', label: 'Data Accuracy', icon: TrendingUp },
        { metric: '80%', label: 'Process Efficiency', icon: Users },
        { metric: '$2.5M', label: 'Annual Savings', icon: DollarSign }
      ],
      tags: ['Data Quality', 'EDC', 'Axon', 'MDM'],
      color: 'from-[#322679] to-[#0A8836]'
    },
    {
      title: 'Cloud Security Posture Management',
      category: 'Cybersecurity',
      id: 'cybersecurity',
      description:
        'Deployed CSPM solution across multi-cloud environment with continuous monitoring and automated compliance for healthcare data protection.',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '100%', label: 'Compliance', icon: Shield },
        { metric: '90%', label: 'Threat Reduction', icon: TrendingUp },
        { metric: '60%', label: 'Cost Savings', icon: DollarSign }
      ],
      tags: ['CASM', 'CSPM', 'GRC', 'Compliance'],
      color: 'from-[#322679] to-[#FEBB00]'
    },
    {
      title: 'Data Warehouse Modernization',
      category: 'Data Services',
      id: 'data-services-modernization',
      description:
        'Migrated legacy data warehouse to modern cloud solution with real-time analytics and advanced visualization capabilities.',
      image:
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '8x', label: 'Performance Gain', icon: TrendingUp },
        { metric: '75%', label: 'Cost Reduction', icon: DollarSign },
        { metric: '360°', label: 'Customer View', icon: Users }
      ],
      tags: [
        'SYBASE IQ',
        'DB2',
        'AS/400',
        'SQL Server',
        'TERADATA',
        'INFORMATICA PC',
        'PL/SQL reports',
        'AWS S3',
        'AWS REDSHIFT',
        'AWS Sagemaker',
        'AB',
        'Power BI',
        'BO R4'
      ],
      color: 'from-[#0A8836] to-[#322679]'
    },
    {
      title: 'Technical Content Localization',
      category: 'Content Services',
      id: 'content-services',
      description:
        'Comprehensive technical content editing and localization for software documentation across 12 languages with L3 quality assurance.',
      image:
        'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '99.9%', label: 'Accuracy', icon: TrendingUp },
        { metric: '50%', label: 'Faster Deployment', icon: Users },
        { metric: '30%', label: 'Support Cost Reduction', icon: DollarSign }
      ],
      tags: ['L1/L2/L3 Editing', 'US/UK Standards', 'Grammarly'],
      color: 'from-[#0A8836] to-[#FEBB00]'
    }
  ];

  return (
    <section id="case-studies" className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case{' '}
            <span className="bg-gradient-to-r from-[#322679] to-[#0A8836] bg-clip-text text-transparent">
              Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from our clients who have transformed their businesses with our innovative solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              id={study.id}
              style={{ height: '600px' }} // Fixed height for all cards
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-300`}
              ></div>
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${study.color} text-white text-sm font-medium rounded-full`}
                    >
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Scrollable Content Container */}
                <div className="flex flex-col flex-grow overflow-hidden">
                  <div className="p-6 flex-grow overflow-y-auto custom-scrollbar">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{study.title}</h3>

                    {/* Full Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full mb-1 mx-auto">
                            <result.icon className="h-3 w-3 text-gray-600" />
                          </div>
                          <div className="text-sm font-bold text-gray-900">{result.metric}</div>
                          <div className="text-xs text-gray-600 line-clamp-1">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* All Tags */}
                    <div className="flex flex-wrap gap-1">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Scrollbar Styles */}
        <style >{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}</style>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-8">Ready to become our next success story?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
