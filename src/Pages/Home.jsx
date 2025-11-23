import React from 'react';
import Hero from '../Components/Hero';
import Aboutsection from '../Components/Aboutsection';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Hero />
            <Aboutsection />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;