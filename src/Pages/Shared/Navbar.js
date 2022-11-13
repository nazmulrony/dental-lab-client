import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const NavLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/">Reviews</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Login</Link></li>
    </>
    return (
        <div className="navbar bg-brand px-4 md:px-10 lg:px-24  mx-auto lg:max-w-screen-2xl border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-compact menu gap-3 font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl lg:text-4xl  font-bold flex text-navy items-center gap-2 ml-2">
                    <img src={logo} alt="" className='h-10 md:h-12 ' />
                    <h2 className=''>Dental<span className='text-ruby'> Lab</span></h2>
                </Link>
            </div>
            <div className="navbar-end hidden  lg:flex">
                <ul className=" menu menu-horizontal p-0 gap-1 font-semibold">
                    {NavLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;