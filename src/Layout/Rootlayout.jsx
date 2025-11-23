import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

const Rootlayout = () => {
    return (
        <div className='bg-dark-100 min-h-screen text-white font-sans'>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Rootlayout;