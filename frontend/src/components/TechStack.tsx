import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Code, Database, Shield, Cloud, Smartphone, Globe, BarChart } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      icon: Code,
      title: 'Frontend Technologies',
      color: 'from-[#322679] to-[#0A8836]',
      technologies: [
        { name: 'React', description: 'Modern UI library' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'Next.js', description: 'Full-stack framework' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
        { name: 'Vue.js', description: 'Progressive framework' },
        { name: 'Angular', description: 'Enterprise applications' }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'from-[#0A8836] to-[#322679]',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'Python', description: 'Data & AI solutions' },
        { name: 'MongoDB', description: 'NoSQL database' },
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'Redis', description: 'In-memory storage' },
        { name: 'GraphQL', description: 'API query language' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-[#FEBB00] to-[#322679]',
      technologies: [
        { name: 'AWS', description: 'Cloud platform' },
        { name: 'Azure', description: 'Microsoft cloud platform' },
        { name: 'GCP', description: 'Google Cloud Platform' },
        { name: 'Docker', description: 'Containerization' },
        { name: 'Kubernetes', description: 'Orchestration' },
        { name: 'Terraform', description: 'Infrastructure as code' },
        { name: 'GitHub Actions', description: 'CI/CD pipeline' },
        { name: 'Microservices', description: 'Scalable architecture' }
      ]
    },
    {
      icon: BarChart,
      title: 'Data Warehouse & Data Visualization',
      color: 'from-[#0A8836] to-[#FEBB00]',
      technologies: [
        { name: 'Data Modelling / Data Lake', description: 'Enterprise data structuring' },
        { name: 'ETL', description: 'Informatica Power Center / IICS, Data Stage, Abinitio, PySpark, AWS Glue' },
        { name: 'Data Governance', description: 'Informatica Data Quality, EDC, AXON' },
        { name: 'Reports', description: 'Business Objects R4' },
        { name: 'Visualization', description: 'Power BI, Tableau, Qlikview, Qliksense, Qlik NPrinting' },
        { name: 'Databricks / PySpark', description: 'Big data analytics' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      color: 'from-[#322679] to-[#FEBB00]',
      technologies: [
        { name: 'OWASP', description: 'Security standards' },
        { name: 'JWT', description: 'Token authentication' },
        { name: 'SSL/TLS', description: 'Encrypted communication' },
        { name: 'Prometheus', description: 'Monitoring system' },
        { name: 'ELK Stack', description: 'Log management' },
        { name: 'Penetration Testing', description: 'Security assessment' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-[#FEBB00] to-[#0A8836]',
      technologies: [
        { name: 'React Native', description: 'Cross-platform apps' },
        { name: 'Flutter', description: 'Multi-platform UI' },
        { name: 'Swift', description: 'iOS development' },
        { name: 'Kotlin', description: 'Android development' },
        { name: 'PWA', description: 'Progressive web apps' },
        { name: 'Ionic', description: 'Hybrid framework' }
      ]
    },
    {
      icon: Globe,
      title: 'AI & Data Science',
      color: 'from-[#322679] to-[#0A8836]',
      technologies: [
        { name: 'TensorFlow', description: 'Machine learning' },
        { name: 'Pandas', description: 'Data manipulation' },
        { name: 'Scikit-learn', description: 'ML algorithms' },
        { name: 'Apache Spark', description: 'Big data processing' },
        { name: 'Tableau', description: 'Data visualization' },
        { name: 'OpenAI API', description: 'AI integration' }
      ]
    }
  ];

  return (
    <section className="py-2 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#322679] to-[#0A8836] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${index === categories.length - 1 && categories.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Card Content */}
              <div className="relative bg-white rounded-3xl shadow-lg p-8 border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Card header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                      <div className="text-xs text-gray-600">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-20 bg-gradient-to-r from-[#322679] to-[#0A8836] rounded-3xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: 'Technologies Mastered', end: 15, suffix: '+' },
              { label: 'Years Experience', end: 2, suffix: '+' },
              { label: 'Latest Versions', end: 100, suffix: '%' },
              { label: 'Support Available', end: 24, suffix: '/7' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <CountUp end={stat.end} duration={10} suffix={stat.suffix || ''} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">Ready to leverage these powerful technologies for your project?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#322679] to-[#0A8836] text-white font-semibold rounded-full hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Discuss Your Tech Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
