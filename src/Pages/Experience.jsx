import React from 'react';
import { workData } from '../assets/assets';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className='py-20 bg-dark-100 min-h-screen pt-32' id='experience'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl font-bold text-white'
                    >
                        Work <span className='text-purple'>Experience</span>
                    </motion.h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        My professional journey and career milestones.
                    </p>

                </div>

                <div className='max-w-4xl mx-auto relative'>
                    {/* Vertical Line */}
                    <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-800 rounded-full'></div>

                    <div className='space-y-12'>
                        {workData.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 rounded-full border-4 border-dark-100 z-10 ${job.color === 'purple' ? 'bg-purple' : job.color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'}`}></div>

                                {/* Content Card */}
                                <div className='w-full md:w-1/2 pl-8 md:pl-0'>
                                    <div className={`bg-dark-200 p-6 rounded-2xl border border-gray-800 hover:border-purple/50 transition-all duration-300 relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        {/* Arrow */}
                                        <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-dark-200 border-t border-l border-gray-800 rotate-45 ${index % 2 === 0 ? '-right-2.5 border-t-purple/50 border-l-purple/50 border-b-0 border-r-0 rotate-135' : '-left-2.5'}`}></div>

                                        <div className='flex items-center justify-between mb-2'>
                                            <h3 className='text-xl font-bold text-white'>{job.role}</h3>
                                            <span className={`text-xs px-2 py-1 rounded-full bg-dark-300 text-gray-300 border border-gray-700 flex items-center gap-1`}>
                                                <FaCalendarAlt className='text-purple' /> {job.duration}
                                            </span>
                                        </div>

                                        <h4 className='text-lg font-semibold text-purple mb-4 flex items-center gap-2'>
                                            <FaBriefcase /> {job.company}
                                        </h4>

                                        <p className='text-gray-400 text-sm leading-relaxed'>
                                            {job.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className='hidden md:block w-1/2'></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
