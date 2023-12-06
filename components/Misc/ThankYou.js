import React, { useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThankYou = () => {

    useEffect(() => {
        // Assuming you have a message in the query parameter after redirect
        const queryParams = new URLSearchParams(window.location.search);
        const message = queryParams.get('message');
    
        if (message) {
          toast.success(message);
        }
      }, []);

    return (
        <div className="container fullDisplay">
            <div className='py-5 text-center'>
                <h1>Thank You for Registering!</h1>
                <p>Your registration was successful.</p>
                <p>Continue to the login page or explore more of our site.</p>
                <Link href="/login">
                    <a className="btn btn-primary">Go to Login</a>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ThankYou;