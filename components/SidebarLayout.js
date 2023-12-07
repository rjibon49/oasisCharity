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
    const { user,isError, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
        console.log(getMe())
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            console.error("Error fetching user information:", isError);
            // You can show an error message or redirect to the homepage with an error message
            router.push("/login");
        }
    }, [isError, router]);
    

    if (isLoading) {
        // You can return a loading indicator or any other UI while authentication status is being checked
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
                <>
                    <div className='row' style={{minHeight: "100vh"}}>
                        <div className='col-md-12'>
                            <Sidebar />
                        </div>
                        <div className='col-md-10'>
                            <main>{children}</main>
                        </div>
                    </div>
                </>
            <Footer />
        </>
    );
};

export default SidebarLayout;