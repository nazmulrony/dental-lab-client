import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <div className='-px-4 flex mt-40 h-96' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='flex-1 md:flex justify-center object-cover relative hidden'>
                <img src={doctor} alt="" className='object-cover h-full -mt-12 scale-125 -translate-y-12 absolute bottom-0 ' />
            </div>
            <div className='text-light flex-1 my-auto px-4  lg:pr-20'>
                <h4 className='text-xl text-ruby font-semibold'>Appointment</h4>
                <h2 className='text-3xl font-semibold'>Make an Appointment Today</h2>
                <p className='my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-brand rounded-none'>Get started</button>
            </div>

        </div>
    );
};

export default MakeAppointment;