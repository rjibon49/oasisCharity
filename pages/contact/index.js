import Head from 'next/head';
import Layout from '../../components/Layout';
import ContactPage from '../../components/ContactComponent/ContactPage';


const index = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <ContactPage />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;