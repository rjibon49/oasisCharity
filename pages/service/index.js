import Head from 'next/head';
import Layout from '../../components/Layout';
import ContactForm from '../../components/globalComponents/ContactForm';
import ServiceCompo from '../../components/ServiceComponent/ServiceCompo';


const index = () => {
    return (
        <>
            <Head>
                <title>Service</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <ServiceCompo />
                        <ContactForm />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;