import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getMe } from '../features/authSlice';

const SidebarLayout = ({children}) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                await dispatch(getMe());
                // You can perform any additional actions here if needed
            } catch (error) {
                // Handle errors
            }
        };

        fetchUserData();
    }, [dispatch]);
    

    // if (isLoading) {
    //     // You can return a loading indicator or any other UI while authentication status is being checked
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            {/* <Header /> */}
                <>
                    <div className='row' style={{minHeight: "100vh"}}>
                        <div className='col-md-2'>
                            <Sidebar />
                        </div>
                        <div className='col-md-10'>
                            <main>{children}</main>
                        </div>
                    </div>
                </>
            {/* <Footer /> */}
        </>
    );
};

export default SidebarLayout;