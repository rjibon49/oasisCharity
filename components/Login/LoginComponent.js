import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import loginImage from "../../public/images/content/loginPageImage.png";
import Link from 'next/link';

// Import Font Awesome icons in your component
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from '../../features/authSlice';

const LoginComponent = () => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ identifier, password }));
    };

    useEffect(() => {
        if (isSuccess) {
            router.push("/");
        }
        // dispatch(reset());
    }, [ isSuccess, router]);

   

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            <form className="row g-4 p-5" onSubmit={handleLogin}>
                                {isError && <p className="text-center">{message}</p>}
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="email" className='text24 mb-2'>Email/Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                        placeholder="Email/Username"
                                    />
                                    <i className="far fa-envelope iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******"
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
                                <div className='text-end'>
                                    <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
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
        </div>
    );
};

export default LoginComponent;