import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-dimBlue text-light" >
            <div>
                <img src={footerLogo} alt="" className='h-16 w-16' />
                <p>Dental Lab<br />Providing the best dental service 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;