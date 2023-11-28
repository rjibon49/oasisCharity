import Image from 'next/image';
import React, { useEffect } from 'react';
import loginImage from "../../public/images/content/loginPageImage.png";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {

    useEffect(() => {
        // Assuming you have a message in the query parameter after redirect
        const queryParams = new URLSearchParams(window.location.search);
        const message = queryParams.get('message');
    
        if (message) {
          toast.success(message);
        }
      }, []);
      
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//   />

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            <form className="row g-4 p-5">
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
                                <div className='text-end'>
                                    <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton">Send</button>
                                </div>
                            </form>
                            
                            <div className='text-center'>
                            <p className='text24'>Don’t have an account? <Link href="/registration"><a><span className='colorText'>Sign up</span></a></Link></p>
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
            <ToastContainer />
        </div>
    );
};

export default LoginComponent;