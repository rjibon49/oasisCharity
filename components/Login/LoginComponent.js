import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginImage from "../../public/images/content/loginPageImage.png";
import { loginUser, reset } from '../../features/authSlice';

const LoginComponent = () => {
  const { user, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const Auth = async (e) => {
    e.preventDefault();

    const { identifier, password } = e.target.elements;

    try {
      await dispatch(loginUser({ identifier: identifier.value, password: password.value }));

      // Reset the auth state
      dispatch(reset());

      // Redirect to the home page on successful login
      router.push("/");
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again.');
    }
  };

  useEffect(() => {
    // If user is authenticated or login is successful, redirect to home
    if (user || isSuccess) {
      router.push("/");
      dispatch(reset());
    }
  }, [user, isSuccess, dispatch, router]);

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
            <div>
              <form className="row g-4 p-5" onSubmit={Auth}>
                <div className="col-md-12 position-relative">
                  <label htmlFor="email" className='text24 mb-2'>Email/Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="identifier"
                    placeholder="Email/Username"
                    required
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
                      placeholder="******"
                      required
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        // onClick={togglePasswordVisibility}
                      >
                        {/* <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                        /> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className='text-end'>
                  <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="loginButton" >Login</button>
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





// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Image from 'next/image';
// import loginImage from "../../public/images/content/loginPageImage.png";
// import Link from 'next/link';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useDispatch, useSelector } from 'react-redux';
// import { LoginUser, reset } from "../../features/authSlice";
// import { useSession } from 'next-auth/react'; 

// const LoginComponent = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const { data: session, status } = useSession();
//     const togglePasswordVisibility = () => {
//         setShowPassword((prevShowPassword) => !prevShowPassword);
//     };

//     const [identifier, setIdentifier] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const router = useRouter();

//     const { user, isError, isSuccess, isLoading, message } = useSelector(
//         (state) => state.auth
//     );

// //   useEffect(() => {
// //     if (user || isSuccess) {
// //       router.push("/");
// //     }
// //     dispatch(reset());
// //   }, [user, isSuccess, dispatch, router]);
// useEffect(() => {
//     if (user) {
//       router.push("/");
//     }
//   }, [user, router, session]);
  

//   const Auth = (e) => {
//     e.preventDefault();
//     dispatch(LoginUser({ identifier, password }));
//   };

    

//     return (
//         <div>
//             <div className='container py-5'>
//                 <div className='row'>
//                     <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
//                         <div>
//                             <form className="row g-4 p-5" onSubmit={Auth}>
//                                 <div className="col-md-12 position-relative">
//                                     <label htmlFor="email" className='text24 mb-2'>Email/Username</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="email"
//                                         placeholder="Email/Username"
//                                         value={identifier}
//                       onChange={(e) => setIdentifier(e.target.value)}
//                                     />
//                                     <i className="far fa-envelope iconPosition"></i>
//                                 </div>
//                                 <div className="col-md-12 position-relative">
//                                     <label htmlFor="password" className='text24 mb-2'>Password</label>
//                                     <div className="input-group">
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             id="password"
//                                             placeholder="******"
//                                             value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                                         />
//                                         <div className="input-group-append">
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-outline-secondary"
//                                                 onClick={togglePasswordVisibility}
//                                             >
//                                                 <FontAwesomeIcon
//                                                     icon={showPassword ? faEyeSlash : faEye}
//                                                 />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='text-end'>
//                                     <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
//                                 </div>
//                                 <div className="col-12 text-center">
//                                     <button type="submit" className="loginButton" >{isLoading ? "Loading..." : "Login"}</button>
//                                 </div>
//                             </form>

//                             <div className='text-center'>
//                                 <p className='text24'>Don’t have an account? <Link href="/registration"><a><span className='colorText'>Sign up</span></a></Link></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-xxl-6 col-xl-6 col-lg-6'>
//                         <div>
//                             <Image src={loginImage} alt='doctor_providing_medical_lab_report' className='' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginComponent;



// import Image from 'next/image';
// import React, { useState } from 'react';
// import loginImage from "../../public/images/content/loginPageImage.png";
// import Link from 'next/link';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { signIn } from 'next-auth/react';

// const LoginComponent = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevShowPassword) => !prevShowPassword);
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const identifier = e.target.email.value;
//         const password = e.target.password.value;

//         await signIn("credentials", {
//             redirect: false,
//             identifier,
//             password,
//         });
//     };

//     return (
//         <div>
//             <div className='container py-5'>
//                 <div className='row'>
//                     <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
//                         <div>
//                             <form className="row g-4 p-5" onSubmit={handleLogin}>
//                                 <div className="col-md-12 position-relative">
//                                     <label htmlFor="email" className='text24 mb-2'>Email/Username</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="email"
//                                         placeholder="Email/Username"
//                                     />
//                                     <i className="far fa-envelope iconPosition"></i>
//                                 </div>
//                                 <div className="col-md-12 position-relative">
//                                     <label htmlFor="password" className='text24 mb-2'>Password</label>
//                                     <div className="input-group">
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             id="password"
//                                             placeholder="******"
//                                         />
//                                         <div className="input-group-append">
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-outline-secondary"
//                                                 onClick={togglePasswordVisibility}
//                                             >
//                                                 <FontAwesomeIcon
//                                                     icon={showPassword ? faEyeSlash : faEye}
//                                                 />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='text-end'>
//                                     <Link href="#"><a><p className='text18'>Forgot password?</p></a></Link>
//                                 </div>
//                                 <div className="col-12 text-center">
//                                     <button type="submit" className="loginButton">Login</button>
//                                 </div>
//                             </form>

//                             <div className='text-center'>
//                                 <p className='text24'>Don’t have an account? <Link href="/registration"><a><span className='colorText'>Sign up</span></a></Link></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-xxl-6 col-xl-6 col-lg-6'>
//                         <div>
//                             <Image src={loginImage} alt='doctor_providing_medical_lab_report' className='' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginComponent;




// import { useRouter } from 'next/router';
// import { useDispatch, useSelector } from "react-redux";
// import { LoginUser, reset } from '../../features/authSlice';

// const [identifier, setIdentifier] = useState("");
// const [password, setPassword] = useState("");
// const dispatch = useDispatch();
// const router = useRouter();
// const { user, isError, isSuccess, isLoading, message } = useSelector(
//     (state) => state.auth
// );

// const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(LoginUser({ identifier, password }));
// };

// useEffect(() => {
//     if (isSuccess) {
//         router.push("/");
//     }
//     // dispatch(reset());
// }, [ isSuccess, router]);