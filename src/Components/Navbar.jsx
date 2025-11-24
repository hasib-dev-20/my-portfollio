import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // Keep Link for Logo if needed, or change to scroll
import { personalInfo } from '../assets/assets';

const Navbar = () => {
    const [showMenu, setShowmenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Active section detection
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showMenu]);

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
        setShowmenu(false);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            {/* Background Backdrop */}
            <div className={`absolute inset-0 -z-10 transition-all duration-300 ${scrolled ? 'bg-dark-100/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}></div>

            <div className='container mx-auto px-6 flex justify-between items-center'>
                {/* Logo */}
                <button onClick={() => scrollToSection('home')} className='text-2xl font-bold text-white flex items-center gap-1 group cursor-pointer'>
                    {personalInfo.name.split(' ')[0]}
                    <span className='text-purple group-hover:text-purple-400 transition-colors'>{personalInfo.name.split(' ')[1]}</span>
                    <div className='w-2 h-2 rounded-full bg-purple ml-1 animate-pulse'></div>
                </button>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer ${activeSection === link.id ? 'text-purple' : 'text-gray-300 hover:text-white'}`}
                        >
                            {link.name}
                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden z-60'>
                    <button onClick={() => setShowmenu(!showMenu)} className='text-white text-2xl focus:outline-none relative'>
                        {showMenu ? <FaXmark /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu Overlay (Backdrop) */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-55 transition-opacity duration-300 md:hidden ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    onClick={() => setShowmenu(false)}
                ></div>

                {/* Mobile Menu Drawer */}
                <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-dark-200 border-l border-gray-800 z-56 shadow-2xl transform transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center`}>
                    <div className='flex flex-col gap-6 p-8'>
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-xl font-semibold text-left transition-colors duration-300 ${activeSection === link.id ? 'text-purple' : 'text-gray-300 hover:text-white'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;