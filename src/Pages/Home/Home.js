import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='bg-brand'>
            <Banner />
            <InfoCards />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;