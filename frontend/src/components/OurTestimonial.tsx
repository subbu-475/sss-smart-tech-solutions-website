import React from 'react';
import { motion } from 'framer-motion';
import TamilImage from '../assets/ourleaders/Tamil.png';
import AshikImage from '../assets/ourleaders/Ashik.png';

const testimonials = [
    {
        name: 'Tamilalagan L',
        title: 'Director & Co-Founder',
        image: TamilImage,
        quote:
            'Our mission is to deliver intelligent, scalable solutions that exceed client expectations. We stand on the cutting edge of modern tech.',
        link: 'https://claude.ai/public/artifacts/5f276aa4-9041-4333-af78-2c039a1abc37',
    },
    {
        name: 'Ashik Ahamad',
        title: 'Director & Co-Founder',
        image: AshikImage,
        quote:
            "Innovation and integrity drive us. We craft solutions that not only solve today's challenges but future-proof your digital growth.",
        link: 'https://claude.ai/public/artifacts/4c37aad7-b59a-4c89-87ba-220038c4d6e9',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-10 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Meet Our <span className="bg-gradient-to-r from-[#322679] to-[#0A8836] bg-clip-text text-transparent">Co-Founders</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Visionaries driving innovation, excellence, and digital transformation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#322679] to-[#0A8836] opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-300" />
                            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#322679] to-[#0A8836] rounded-full p-1">
                                            <div className="bg-white rounded-full p-1">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-20 h-20 rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-md leading-relaxed italic mb-4">
                                    "{testimonial.quote}"
                                </p>
                                <a
                                    href={testimonial.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-white bg-gradient-to-r from-[#322679] to-[#0A8836] px-4 py-2 rounded-lg font-semibold shadow hover:from-[#4a3a9b] hover:to-[#0c9d3e] transition-all duration-300 transform hover:scale-105"
                                >
                                    Browse Additional Detail
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
