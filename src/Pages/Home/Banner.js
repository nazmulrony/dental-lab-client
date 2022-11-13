import React from 'react';
import chair from '../../assets/images/chair.png'


const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 px-4 lg:px-24 md:py-10 lg:py-20 bg-chair '>
            <div >
                <h2 className='text-5xl font-bold text-navy'>A better life starts with a beautiful smile</h2>
                <p className='my-4'>Relax, this is going to be so easy. The smart way to find a dentist. Get matched with a great dentist today. Seriously, it’s time.</p>
                <button className="btn btn-brand rounded-none">Get Started</button>
            </div>
            <img src={chair} alt="" className='row-start-1 md:col-start-2' />
        </div>
    );
};

export default Banner;