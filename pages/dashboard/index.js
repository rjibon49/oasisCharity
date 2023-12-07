import Head from 'next/head';
import SidebarLayout from '../../components/SidebarLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../features/authSlice';

const Index = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isError, isLoading, user, message } = useSelector((state) => state.auth);

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
    }, [isError, router, message]);
    

    if (isLoading) {
        // You can return a loading indicator or any other UI while authentication status is being checked
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <SidebarLayout>
                    <div className='my-5'>
                        Welcome to the Dashboard
                    </div>
                </SidebarLayout>
            </div>
        </>
    );
};

export default Index;