// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMe } from '../../../features/authSlice';

const Dashboard = () => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    // const { isError, isLoading, user, message } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     dispatch(getMe());
    //     console.log(getMe())
    // }, [dispatch]);

    // useEffect(() => {
    //     if (isError) {
    //         console.error("Error fetching user information:", isError);
    //         // You can show an error message or redirect to the homepage with an error message
    //         router.push("/login");
    //     }
    // }, [isError, router, message]);
    

    // if (isLoading) {
    //     // You can return a loading indicator or any other UI while authentication status is being checked
    //     return <div>Loading...</div>;
    // }
    return (
        <div>
            <h1 className='text-center'>Welcome to Dashboard</h1>
        </div>
    );
};

export default Dashboard;