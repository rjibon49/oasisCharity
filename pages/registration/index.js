import Head from 'next/head';
import Layout from '../../components/Layout';
import RegistrationComponent from '../../components/Registration/RegistrationComponent';


const index = () => {
    return (
        <>
            <Head>
                <title>Registration</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <RegistrationComponent />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;