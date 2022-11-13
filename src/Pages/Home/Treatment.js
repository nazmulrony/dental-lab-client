import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center px-4'>
            <div className='flex justify-center md:justify-end'>
                <img src={treatment} alt="" className=' md:w-2/3 rounded-lg' />
            </div>
            <div className='md:pr-10'>
                <h1 className='text-5xl font-semibold text-navy'>Exceptional Dental Care, on Your Terms</h1>
                <p className='my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-brand rounded-none">Get Started</button>
            </div>

        </div>
    );
};

export default Treatment;