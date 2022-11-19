import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import CustomSpinner from '../components/CustomSpinner';
import { AuthContext } from '../contexts/AuthProvider';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    });
    if (isLoading) {
        return <CustomSpinner />
    }
    return (
        <div>
            <h2 className='text-3xl text-navy'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="w-full my-6">
                    <thead className='bg-ruby text-light text-sm whitespace-nowrap'>
                        <tr className=''>
                            <th className='px-6 py-2'></th>
                            <th className='px-6 py-2'>Name</th>
                            <th className='px-6 py-2'>Service</th>
                            <th className='px-6 py-2'>Date</th>
                            <th className='px-6 py-2'>Time</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-300 text-navy text-sm'>
                        {
                            bookings.map((booking, index) => <tr key={booking._id} className="whitespace-nowrap  hover:bg-dimBlue duration-150 hover:text-light">
                                <th className='px-6 text-center py-4'>{index + 1}</th>
                                <td className='px-6 text-center py-4'>{booking.patientName}</td>
                                <td className='px-6 text-center py-4'>{booking.treatment}</td>
                                <td className='px-6 text-center py-4'>{booking.appointmentDate}</td>
                                <td className='px-6 text-center py-4'>{booking.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;