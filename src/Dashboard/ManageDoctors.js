import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import CustomSpinner from '../components/CustomSpinner';
import ConfirmationModal from '../Pages/Shared/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://dental-lab-server-nazmulrony.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
                    }
                })
                const data = res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    const handleDeleteDoctor = doctor => {
        fetch(`https://dental-lab-server-nazmulrony.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor ${doctor.name} deleted successfully!`)
                    refetch()
                }
                refetch();
            })
    }
    if (isLoading) {
        return <CustomSpinner />
    }

    return (
        <div>
            <h2 className="text-3xl text-navy">Manage Doctors</h2>
            <div className='overflow-x-auto'>
                <table className="divide-y divide-gray-300 my-6  w-full">
                    <thead className="bg-ruby px-4 text-light">
                        <tr>
                            <th className="px-6 py-4 "></th>
                            <th className="px-6 py-4 ">Avatar</th>
                            <th className="px-6 py-4 ">Name </th>
                            <th className="px-6 py-4 ">Specialty</th>
                            <th className="px-6 py-4 ">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300 text-navy font-semibold">
                        {
                            doctors?.length && doctors.map((doctor, i) => <tr key={doctor._id} className="whitespace-nowrap hover:bg-dimBlue hover:text-light ">
                                <td className="px-6 text-center py-4 ">{i + 1} </td>
                                <td className="px-6 mx-auto py-4 flex justify-center">
                                    {/* <div className="w-24 mask mask-squircle mx-auto"> */}
                                    <img src={doctor.image} alt="doctor-img" />
                                    {/* </div> */}
                                </td>
                                <td className="px-6 text-center py-4">{doctor.name} </td>
                                <td className="px-6 text-center py-4">{doctor.specialty} </td>
                                <td className="px-6 text-center py-4 grid place-items-center">
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-xs rounded-full">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={"Are you sure you want to delete?"}
                    message={`If you delete ${deletingDoctor.name}, it can't be undone!`}
                    modalData={deletingDoctor}
                    successAction={handleDeleteDoctor}
                    successBtnName={'Confirm'}
                />
            }
        </div>
    );
};

export default ManageDoctors;