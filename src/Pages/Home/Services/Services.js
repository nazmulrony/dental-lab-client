import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'At Dental Lab, you can have exceptional tooth-filling services that would last several years with minimum care and protection.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Professional teeth whiteners are safe, effective, and done under the supervision of a dental professional.',
            img: whitening
        },
    ]
    return (
        <div className='px-4 my-20'>
            <div className='text-center my-6'>
                <h4 className='text-xl text-ruby font-semibold'>Our Services</h4>
                <h2 className='text-3xl text-navy font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;