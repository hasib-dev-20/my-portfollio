import React, { Suspense } from 'react';
import Hero from '../Components/Hero';
import Aboutsection from '../Components/Aboutsection';

// Lazy load other sections for performance
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Experience = React.lazy(() => import('./Experience'));
const Contact = React.lazy(() => import('./Contact'));

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Hero />
            <Aboutsection />
            <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Suspense>
        </div>
    );
};

export default Home;