import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-xl md:max-w-3xl lg:max-w-screen-2xl mx-auto bg-brand py-6 md:py-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main; 