import Head from 'next/head';
import Layout from '../../components/Layout';
import LoginComponent from '../../components/Login/LoginComponent';


const index = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <LoginComponent />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;