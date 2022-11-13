import React from 'react';
import bgChair from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = () => {
    return (
        <div className="hero min-h-screen lg:px-20 " style={{ backgroundImage: `url(${bgChair})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="max-w-lg rounded-lg shadow-2xl" />
                <div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;