import React from 'react';
import logo from "../public/images/logo/oasisLogo.png";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className='container'>
                <nav className="navbar-light navbar navbar-expand-xl">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand"><Image src={logo} alt='Oasis Charity Logo' className='' /></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <Link href="/"><a className="nav-link" aria-current="page">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link" >About Us</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link" >Service</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link">Our Team</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link">Contact</a></Link>
                                </li>
                                <li className=" buttoncolor nav-item">
                                    <Link href="#"><a className="buttonStyle" >Login</a></Link>
                                </li>
                                <li className=" buttoncolor nav-item">
                                    <Link href="#"><a className="buttonStyle" >Get Appointment</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;