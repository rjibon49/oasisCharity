import Head from 'next/head';
import Layout from '../../components/Layout';
import OurMission from '../../components/globalComponents/OurMission';
import OurVission from '../../components/globalComponents/OurVission';
import AboutUs from '../../components/AboutUsComponent/AboutUs';
import ContactForm from '../../components/globalComponents/ContactForm';


const index = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <AboutUs />
                        <OurMission />
                        <OurVission />
                        <ContactForm />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;