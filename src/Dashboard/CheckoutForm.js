import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import ButtonSinner from '../components/ButtonSinner';
import './common.css';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://dental-lab-server-nazmulrony.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }
        setSuccess('');
        setTransactionId('');
        setProcessing(true)
        //card payment confirmation
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        const payment = {
            price,
            transactionID: paymentIntent.id,
            email,
            bookingID: _id

        }
        // console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            console.log(card);
            fetch('https://dental-lab-server-nazmulrony.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSuccess('Your Payment successfully completed');
                    setTransactionId(paymentIntent.id);
                })
        }
        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <button className='my-4'> <ButtonSinner /> </button> :
                        <button
                            className='btn btn-brand btn-sm my-4'
                            type="submit"
                            disabled={!stripe || !clientSecret || transactionId}>
                            Pay
                        </button>
                }
            </form>
            <p className='text-red-600'>{cardError}</p>
            {
                success && transactionId && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='text'> Your transaction ID is: <span className='text-ruby text-sm'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;