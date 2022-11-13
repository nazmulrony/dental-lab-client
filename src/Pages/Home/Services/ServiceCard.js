import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card  bg-base-100 shadow-xl pt-8">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body px-6 text-center">
                <h2 className="text-2xl text-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;