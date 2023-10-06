import Image from 'next/image';
import React from 'react';
import loginImage from "../../public/images/content/loginPageImage.png";
import Link from 'next/link';

const LoginComponent = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            {/* <form className="row g-4 p-5">
                                <div className="col-md-12">
                                    <label htmlFor="email" className='text24 mb-2'>Email/Phone</label>
                                    <input type="text" className="form-control" id='email' placeholder="Email/Phone" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password" className='text24 mb-2'>Email/Phone</label>
                                    <input type="password" className="form-control" id='password'  placeholder="Email" />
                                </div>
                                <div className='text-end'>
                                    <Link href="#"><a><p className='text18'>Forget password?</p></a></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton">Send</button>
                                </div>
                            </form> */}

                            <form className="row g-4 p-5">
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="email" className='text24 mb-2'>Email/Phone</label>
                                    <input type="text" className="form-control" id='email' placeholder="Email/Phone" />
                                    <i className="far fa-envelope position-absolute end-0 top-50 translate-middle-y"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <input type="password" className="form-control" id='password' placeholder="Password" />
                                    <i className="far fa-eye-slash position-absolute end-0 top-50 translate-middle-y"></i>
                                </div>
                                <div className='text-end'>
                                    <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton">Send</button>
                                </div>
                            </form>
                            
                            <div className='text-center'>
                                <p className='text24'>Don’t have an account? <span className='colorText'>Sign up</span></p>
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

export default LoginComponent;