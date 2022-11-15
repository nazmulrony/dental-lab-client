import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query'


const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);//treatment is a single appointment option

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')//this callback function works only in single line 
            .then(res => res.json())
    })

    return (
        <div className='mt-16 bg-brand'>
            <p className='text-center  font-semibold text-ruby'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                />
            }
        </div>
    );
};

export default AvailableAppointments;