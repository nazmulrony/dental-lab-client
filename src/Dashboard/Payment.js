import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PK);
// console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, slot, appointmentDate } = booking;
    // console.log(booking);
    return (
        <div>
            <h2 className='text-3xl text-navy'>Payment</h2>
            <h3 className=' font-semibold'>Treatment Name: <span className='text-ruby font-normal'>{treatment}</span> </h3>
            <h3 className=' font-semibold'>Appointment Date: <span className='text-ruby font-normal'>{appointmentDate}</span> </h3>
            <h3 className=' font-semibold'>Appointment Time: <span className='text-ruby font-normal'>{slot}</span> </h3>
            <h3 className=' font-semibold'>Payment Amount: <span className='text-ruby font-normal'>${price}</span>  </h3>
            <div className='max-w-sm my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;