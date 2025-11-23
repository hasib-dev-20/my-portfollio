import React from 'react';
import { projects } from '../assets/assets';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='py-20 bg-dark-100 min-h-screen pt-32' id='projects'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl font-bold text-white'
                    >
                        Featured <span className='text-purple'>Projects</span>
                    </motion.h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Showcasing some of my best work and technical experiments.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-dark-200 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple/50 hover:shadow-xl hover:shadow-purple/10 transition-all duration-300 group flex flex-col'
                        >
                            <div className='relative overflow-hidden h-48'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                                    <a href={project.demo} className='p-3 bg-purple text-white rounded-full hover:bg-purple-700 transition-colors' title="Live Demo">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.code} className='p-3 bg-dark-300 text-white rounded-full hover:bg-dark-400 transition-colors' title="View Code">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>

                            <div className='p-6 flex-1 flex flex-col'>
                                <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                                <p className='text-gray-400 mb-4 text-sm line-clamp-3 flex-1'>{project.description}</p>

                                <div className='flex flex-wrap gap-2 mt-auto'>
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='px-2 py-1 bg-dark-300 text-xs text-gray-300 rounded-md border border-gray-700'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
