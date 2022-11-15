import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast'

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const handleSignup = data => {
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created')
                const userInfo = {
                    displayName: data.name
                }
                //update user profile 
                updateUser(userInfo)
                    .then(result => {
                        navigate('/')
                    })
                    .catch(error => { })
            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message);
            })
    }
    return (
        <div className='px-4'>
            <div className='mx-auto py-6 bg-light max-w-md px-6 rounded-xl shadow-lg shadow-black/10'>
                <h3 className='text-xl text-ruby font-semibold text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">Name</label>
                        <input
                            type="name"
                            {...register("name", {
                                required: 'Name is required'
                            })}
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full "
                        />
                        {errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",

                            })}
                            placeholder="Enter Email"
                            className="input input-bordered w-full "
                        />
                        {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least six characters long' },
                                pattern: {
                                    value: /^(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must include at least one number and one special character.'
                                }
                            })}
                            placeholder="Enter Password"
                            className="input input-bordered w-full "
                        />
                        {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {
                        signupError && <p className='text-red-600 mb-1 text-sm'>{signupError}</p>
                    }
                    <input
                        value='Sign Up'
                        type="submit"
                        className='btn btn-brand w-full' />
                </form>
                <p className='text-center text-sm my-3'>Already have an account? <Link to="/login" className=' text-ruby'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-brand-outline w-full'><FaGoogle className='text-xl mr-2' /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;