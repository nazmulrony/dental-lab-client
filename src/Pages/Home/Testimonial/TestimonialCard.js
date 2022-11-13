import React from 'react';

const TestimonialCard = ({ review }) => {
    const { name, img, reviewText, location } = review;
    return (
        <div className='bg-light p-6 rounded-lg shadow-md shadow-black/20 mt-6'>
            <div className="flex gap-3 mb-4">
                <div className="w-16 rounded-full ring ring-ruby ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-semibold text-ruby'>{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
            <p>{reviewText}</p>
        </div>
    );
};

export default TestimonialCard;