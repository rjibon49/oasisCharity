import Image from 'next/image';
import React from 'react';
import loginImage from "../../public/images/content/loginPageImage.png";
import googleIcon from "../../public/images/content/Google-Original.png";
import Link from 'next/link';

const RegistrationComponent = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            <form className="row g-4 p-5">
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="email" className='text24 mb-2'>Full Name</label>
                                    <input type="text" className="form-control" id='email' placeholder="Email/Phone" />
                                    <i className="fa-regular fa-user iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="email" className='text24 mb-2'>Email/Phone</label>
                                    <input type="text" className="form-control" id='email' placeholder="Email/Phone" />
                                    <i className="far fa-envelope iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <input type="password" className="form-control" id='password' placeholder="Password" />
                                    <i className="far fa-eye-slash iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="confirmPassword" className='text24 mb-2'>Confirm Password</label>
                                    <input type="password" className="form-control" id='confirmPassword' placeholder="Password" />
                                    <i className="far fa-eye-slash iconPosition"></i>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton">Create Account</button>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="googleButton"><Image src={googleIcon} alt='Google Orginal Logo' className='' />Sign up with Google</button>
                                </div>
                            </form>
                            
                            <div className='text-center'>
                                <p className='text24'>Already have an account? <Link href="/login"><a><span className='colorText'>Sign in</span></a></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6'>
                        <div>
                            <Image src={loginImage} alt='doctor_providing_medical_lab_report' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;