import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9 am to 8 pm everyday',
            bgClass: 'bg-ruby',
            icon: clock
        },
        {
            id: 2,
            name: 'Visit Our location',
            description: 'Sony Square, Mirpur-1, Dhaka',
            bgClass: 'bg-navy',
            icon: marker
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+12345678945',
            bgClass: 'bg-ruby',
            icon: phone
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 my-6'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    );
};

export default InfoCards;