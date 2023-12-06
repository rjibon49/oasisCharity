import Head from 'next/head';
import Layout from '../../components/Layout';
import ThankYou from '../../components/Misc/ThankYou';


const index = () => {
    return (
        <>
            <Head>
                <title>Thank You</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <ThankYou />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;