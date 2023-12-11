import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import loginImage from "../../public/images/content/loginPageImage.png";
import googleIcon from "../../public/images/content/Google-Original.png";
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Font Awesome icons in your component
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RegistrationComponent = () => {

    const router = useRouter();

    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/users', formData);
      
          if (response.status >= 200 && response.status < 300) {
            // toast.success('Registration Successful');
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
            router.push('/thank-you?message=Registration successful.');
          } else {
            // Handle registration error
            handleRegistrationError(response);
          }
        } catch (error) {
          // Handle registration error
          handleRegistrationError(error.response);
        }
      };
      
      const handleRegistrationError = (response) => {
        if (response.status === 409) {
          toast.error('This email or Username already exists');
        } else if (response.status === 400) {
          toast.error('Passwords do not match');
        } else {
          toast.error('Registration failed');
        }
      };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            <form className="row g-4 p-5" onSubmit={handleSubmit}>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="userName" className='text24 mb-2'>Username</label>
                                    <input type="text" className="form-control" id='userName' placeholder="username" name="username" value={formData.username} onChange={handleChange} />
                                    <i className="fa-regular fa-user iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="emailAddress" className='text24 mb-2'>Email Address</label>
                                    <input type="email" className="form-control" id='emailAddress'  placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
                                    <i className="far fa-envelope iconPosition"></i>
                                </div>
                                {/* <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <input type="password" className="form-control" id='password' placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                                    <i className="far fa-eye-slash iconPosition"></i>
                                </div> */}
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <div className="input-group">
                                        <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id='password'
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        />
                                        <div className="input-group-append">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                            />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="confirmPassword" className='text24 mb-2'>Confirm Password</label>
                                    <div className="input-group">
                                        <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id='confirmPassword'
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        />
                                        <div className="input-group-append">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            <FontAwesomeIcon
                                            icon={showConfirmPassword ? faEyeSlash : faEye}
                                            />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-12 position-relative">
                                    <label htmlFor="confirmPassword" className='text24 mb-2'>Confirm Password</label>
                                    <input type="password" className="form-control" id='confirmPassword' placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                                    <i className="far fa-eye-slash iconPosition"></i>
                                </div> */}
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
            <ToastContainer />
        </div>
    );
};

export default RegistrationComponent;