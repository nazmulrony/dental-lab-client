import React from 'react';

const InfoCard = ({ card }) => {
    const { name, icon, description, bgClass } = card;
    return (
        <div className={`${bgClass} px-6 lg:py-10 py-8 rounded-lg flex gap-4 items-center flex-col md:flex-row `}>
            <div>
                <img src={icon} alt="" className='' />
            </div>
            <div className='text-light'>
                <h4 className='text-2xl font-semibold'>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;