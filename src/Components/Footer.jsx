import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../assets/assets';

const Footer = () => {
    return (
        <footer className='bg-dark-200 py-12 border-t border-gray-800'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold text-white mb-2'>
                            {personalInfo.name.split(' ')[0]}<span className='text-purple'>{personalInfo.name.split(' ')[1]}</span>
                        </h2>
                        <p className='text-gray-400 text-sm'>
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className='flex gap-6'>
                        <a href={personalInfo.socialLinks.github} className='text-gray-400 hover:text-white text-2xl transition-colors'>
                            <FaGithub />
                        </a>
                        <a href={personalInfo.socialLinks.linkedin} className='text-gray-400 hover:text-blue-500 text-2xl transition-colors'>
                            <FaLinkedin />
                        </a>
                        <a href={personalInfo.socialLinks.twitter} className='text-gray-400 hover:text-blue-400 text-2xl transition-colors'>
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className='mt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-1 space-y-2'>
                    Made By <FaHeart className='text-red-500' /> {personalInfo.name}
                    <p className='text-gray-400 text-sm'>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;