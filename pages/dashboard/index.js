import Head from 'next/head';
import SidebarLayout from '../../components/SidebarLayout';
import Dashboard from '../../components/Dashboard/Dashboard';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { getMe } from '../../features/authSlice';

const Index = () => {
    

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
                        <Dashboard />
                    </div>
                </SidebarLayout>
            </div>
        </>
    );
};

export default Index;