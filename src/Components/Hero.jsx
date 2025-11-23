import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../assets/assets';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id='home' className='min-h-screen flex items-center justify-center bg-linear-to-br from-dark-100 via-dark-200 to-dark-100 overflow-hidden relative pt-20 md:pt-0'>

            {/* Background Glow */}
            <div className='absolute top-20 left-20 w-72 h-72 bg-purple/20 rounded-full blur-[100px]'></div>
            <div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]'></div>

            <div className='container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10'>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='text-center md:text-left'
                >
                    <h2 className='text-lg md:text-xl font-medium text-purple mb-2'>Hello, I'm</h2>
                    <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 leading-tight'>
                        {personalInfo.name}
                    </h1>
                    <h3 className='text-2xl md:text-3xl font-semibold text-gray-300 mb-6 typewriter'>
                        {personalInfo.role}
                    </h3>
                    <p className='text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed'>
                        {personalInfo.bio}
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className='px-8 py-3 bg-purple text-white rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple/30 cursor-pointer'
                        >
                            View Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:border-purple hover:text-purple transition-all duration-300 cursor-pointer'
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='relative flex justify-center'
                >
                    <div className='relative w-72 h-72 md:w-96 md:h-96'>
                        {/* Rotating Border */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className='absolute inset-0 rounded-full border-2 border-dashed border-purple/30'
                        ></motion.div>

                        {/* Profile Image Container */}
                        <div className='absolute inset-2 rounded-full overflow-hidden border-4 border-dark-300 shadow-2xl'>
                            <img
                                src="/Profile Image.png"
                                alt="Profile"
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className='absolute -bottom-4 -right-4 bg-dark-200 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center gap-3'
                        >
                            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                            <span className='text-sm font-medium text-gray-300'>Available</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;