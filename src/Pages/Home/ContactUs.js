import React from 'react';
import appointment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div className='-px-4 text-center text-light p-10 mt-20' style={{ backgroundImage: `url(${appointment})` }}>
            <h4 className='font-semibold text-xl text-ruby'>Contact Us</h4>
            <h2 className='font-semibold text-3xl lg:text-4x'>Stay Connected with Us</h2>
            <form className='flex flex-col items-center'>
                <input type="email" placeholder="Email" className="input input-bordered my-2 w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered my-2 w-full max-w-xs" />
                <textarea className="textarea textarea-bordered my-2 w-full max-w-xs" placeholder="Your message"></textarea>
                <button type='submit' className="btn btn-brand rounded-none px-10 mt-2">Submit</button>
            </form>

        </div>
    );
};

export default ContactUs;