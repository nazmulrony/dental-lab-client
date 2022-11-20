import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query'
import CustomSpinner from '../../components/CustomSpinner';


const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);//treatment is a single appointment option
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions, isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)//this callback function works only in single line 
            .then(res => res.json())
    })
    if (isLoading) {
        return <CustomSpinner />
    }
    return (
        <div className='mt-16 bg-brand'>
            <p className='text-center mb-6 font-semibold text-ruby'>Available Appointments on {format(selectedDate, 'PP')}</p>
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
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default AvailableAppointments;