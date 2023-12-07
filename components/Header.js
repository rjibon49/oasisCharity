import React from 'react';
import logo from "../public/images/logo/oasisLogo.png";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from '../features/authSlice';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setIsSticky(true);
        } else {
        setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const router = useRouter();
    const dispatch = useDispatch();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
      );
    
      const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        router.push("/");
      };


    return (
        <>
            <div className='darkBg'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='headerIconWidth py-3'>
                            <select id="inputStateCountry" className="headerCountrySelect">
                                <option selected>United State</option>
                                <option>Span</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                            </select>
                        
                            <div className='d-flex flex-wrap justify-content-between gap-2 pt-3'>
                                <i className="fa-brands fa-facebook headerIcon"></i>
                                <i className="fa-brands fa-instagram headerIcon"></i>
                                <i className="fa-brands fa-linkedin headerIcon"></i>
                                <i className="fa-brands fa-youtube headerIcon"></i>
                                <i className="fa-brands fa-pinterest headerIcon"></i>
                                <i className="fa-brands fa-twitter headerIcon"></i>
                            </div>
                        </div>
                        <div className=''>
                            <select id="inputStateLanguage" className="headerLanguageSelect">
                                <option selected>English</option>
                                <option>Spanish</option>
                                <option>Bangla</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container ${isSticky ? 'sticky-top' : ''}`}>
                <nav className={`navbar-light navbar navbar-expand-xl ${isSticky ? 'sticky' : ''}`}>
                    <Link href="/" className="navbar-brand"><a><Image src={logo} alt='Oasis Charity Logo' className='' /></a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link" aria-current="page">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about-us"><a className="nav-link" >About Us</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/service"><a className="nav-link" >Service</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/our-team"><a className="nav-link">Our Team</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            </li>
                            { user && <li className="nav-item">
                                <Link href="/dashboard"><a className="nav-link">Dashboard</a></Link>
                            </li>}
                            {user && user.email ? (
                                <>
                                {/* If user is logged in, show Logout */}
                                <li className="nav-item">
                                    <button className="linkStyle" onClick={logout}>
                                    Logout
                                    </button>
                                </li>
                                </>
                            ) : (
                                <>
                                {/* If user is not logged in, show Login and Get Appointment */}
                                <li className="nav-item">
                                    <Link href="/login">
                                    <a className="linkStyle">Login</a>
                                    </Link>
                                </li>
                                <li className=" nav-item">
                                    <Link href="/registration">
                                    <a className="linkStyle">Get Appointment</a>
                                    </Link>
                                </li>
                                </>
                            )}
                                { user && <li className="fw-bold nav-item text-center">{user.username}</li> }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;