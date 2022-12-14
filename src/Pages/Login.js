import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const handleLogin = data => {
        setLoginError('')
        console.log(data);
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }
    return (
        <div className='px-4'>
            <div className='mx-auto py-6 bg-light max-w-md px-6 rounded-xl shadow-lg shadow-black/10'>
                <h3 className='text-xl text-ruby font-semibold text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least six characters' }
                            })}
                            placeholder="Enter Password"
                            className="input input-bordered w-full "
                        />
                        {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password?.message}</p>}
                        <label className="label">Forgot password?</label>
                    </div>
                    {
                        loginError && <p className='text-red-600 mb-1 text-sm'>{loginError}</p>
                    }
                    <input
                        value="Login"
                        type="submit"
                        className='btn btn-brand w-full' />
                </form>
                <p className='text-center text-sm my-3'>New to Dental Lab? <Link to="/signup" className=' text-ruby'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-brand-outline w-full'><FaGoogle className='text-xl mr-2' /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;