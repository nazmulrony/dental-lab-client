import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import CustomSpinner from '../components/CustomSpinner';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch('https://dental-lab-server-nazmulrony.vercel.app/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`https://dental-lab-server-nazmulrony.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('User successfully migrated as admin.')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <CustomSpinner />
    }
    return (
        <div>
            <h2 className='text-3xl text-navy'>All Users</h2>
            <div className='overflow-x-auto'>
                <table className="divide-y divide-gray-300 my-6  w-full">
                    <thead className="bg-ruby px-4 text-light text-sm">
                        <tr>
                            <th className="px-6 py-2 "></th>
                            <th className="px-6 py-2 ">Name </th>
                            <th className="px-6 py-2 ">Email</th>
                            <th className="px-6 py-2 ">Admin Action</th>
                            <th className="px-6 py-2 ">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300 text-navy text-sm">
                        {
                            users?.length && users.map((user, i) => <tr key={user._id} className="whitespace-nowrap hover:bg-dimBlue hover:text-light ">
                                <td className="px-6 text-center py-4 ">{i + 1} </td>
                                <td className="px-6 text-center py-4">{user.name} </td>
                                <td className="px-6 text-center py-4">{user.email} </td>
                                <td className="px-6 text-center py-4 ">{!user.role && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-success rounded-full btn-xs'>Make Admin</button>}</td>
                                <td className="px-6 text-center py-4"><button className='btn btn-error btn-xs rounded-full'>Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;