import React from 'react';
import { aboutInfo } from '../assets/assets';
import { motion } from 'framer-motion';

const Aboutsection = () => {
    return (
        <div className='py-20 bg-dark-100' id='about'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl font-bold text-white'
                    >
                        About <span className='text-purple'>Me</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-gray-400 text-lg max-w-2xl mx-auto'
                    >
                        Get to know more about my background and passion for technology.
                    </motion.p>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative'
                    >
                        <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group'>
                            <img
                                className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                                src="/Hasib-1.png"
                                alt="About Me"
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        {/* Decorative elements */}
                        <div className='absolute -z-10 top-10 -left-10 w-full h-full border-2 border-purple/20 rounded-2xl'></div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='space-y-8'
                    >
                        <div className='space-y-6'>
                            {aboutInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='flex gap-6 p-6 rounded-xl bg-dark-200 border border-gray-800 hover:border-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10 group'
                                >
                                    <div className={`text-4xl ${item.color} p-3 bg-dark-300 rounded-lg group-hover:scale-110 transition-transform duration-300 h-fit`}>
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors'>{item.title}</h3>
                                        <p className='text-gray-400 leading-relaxed'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className='p-6 rounded-xl bg-linear-to-r from-purple/10 to-blue-500/10 border border-purple/20'>
                            <p className='text-gray-300 italic leading-relaxed'>
                                "I believe in writing code that not only works but is also clean, maintainable, and scalable. My goal is to build applications that provide real value to users."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Aboutsection;