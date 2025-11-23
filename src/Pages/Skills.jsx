import React from 'react';
import { skills } from '../assets/assets';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className='py-20 bg-dark-100 min-h-screen pt-32' id='skills'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl font-bold text-white'
                    >
                        My <span className='text-purple'>Skills</span>
                    </motion.h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        A comprehensive look at the technologies and tools I work with.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-dark-200 p-8 rounded-2xl border border-gray-800 hover:border-purple/50 hover:shadow-xl hover:shadow-purple/10 transition-all duration-300 group'
                        >
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='p-4 bg-dark-300 rounded-xl text-purple text-3xl group-hover:scale-110 transition-transform duration-300'>
                                    <skill.icon />
                                </div>
                                <h3 className='text-xl font-bold text-white'>{skill.title}</h3>
                            </div>

                            <p className='text-gray-400 mb-6 min-h-[48px]'>{skill.description}</p>

                            <div className='flex flex-wrap gap-2'>
                                {skill.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className='px-3 py-1 bg-dark-300 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-purple/50 hover:text-purple transition-colors duration-300'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
