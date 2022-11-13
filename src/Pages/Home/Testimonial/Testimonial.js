import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Saif Hasan',
            location: 'Rajshahi'
        },
        {
            id: 2,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Zafrin Ahmed',
            location: 'Dhaka'
        },
        {
            id: 3,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Mahmuda Sheikh',
            location: 'Khulna'
        },
    ]
    return (
        <section className='px-4 mt-20'>
            <div className='flex justify-between items-center lg:px-20'>
                <div className='flex-1 '>
                    <h4 className='font-semibold text-xl text-ruby'>Testimonial</h4>
                    <h2 className='font-semibold text-3xl lg:text-4xl text-navy'>Valuable Feedback from Patients</h2>
                </div>
                <img src={quote} alt="" className='w-24 lg:w-48' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review.id}
                        review={review}

                    />)

                }
            </div>

        </section>
    );
};

export default Testimonial;