import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomSpinner from '../components/CustomSpinner';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imageHostKey;
    // console.log(imageHostKey);
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = fetch('http://localhost:5000/appointmentSpecialty')
            const data = (await res).json();
            return data;
        }
    })
    // add doctor handler
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    console.log(doctor);
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('dentalLabToken')}`
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success('Doctor successfully added');
                                navigate('/dashboard/manageDoctors')
                            }

                        })
                }
            })
    }

    if (isLoading) {
        return <CustomSpinner />
    }
    return (
        <div>
            <h2 className="text-3xl text-navy">Add a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)} className="max-w-xl bg-light p-6 rounded-xl my-6 shadow-xl shadow-black/10">
                <div className="form-control w-full">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        {...register("name", {
                            required: 'Name is required'
                        })}
                        placeholder="Enter Doctor's Name"
                        className="input input-bordered w-full "
                    />
                    {errors.name && <p className='text-red-600 mt-1 text-sm'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: 'Email is required'
                        })}
                        placeholder="Enter Email"
                        className="input input-bordered w-full "
                    />
                    {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">Specialty</label>
                    <select
                        {...register("specialty", {
                            required: 'Specialty is required'
                        })}
                        className="select select-bordered w-full ">
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">Doctor's Image</label>
                    <input
                        type="file"
                        {...register("image", {
                            required: 'image is required'
                        })}
                        placeholder="Enter Doctor's Image"
                        className="file-input file-input-bordered file-input-primary w-full"
                    />
                    {errors.image && <p className='text-red-600 mt-1 text-sm'>{errors.image?.message}</p>}
                </div>
                <input
                    value="Add Doctor"
                    type="submit"
                    className='btn btn-brand w-full my-4' />
            </form>
        </div>
    );
};

export default AddDoctor;