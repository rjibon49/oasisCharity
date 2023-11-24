import React from 'react';
import pharma from "../../public/images/content/doctorPharmacist.png";
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className='colorBg my-5 '>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6'>
                        <Image src={pharma} alt='Pharma Doctor hold the midicine on his hand' className='' />
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div className=''>
                            <h5 className='colorFont pb-3'>About Us</h5>
                            <h3 className='text40 pb-3'>Book your clinic appointment with an ease</h3>
                            <h6 className='text18 pb-3'>A future healthy and future of joy is our mission. We looking forward to you schedule time with us to help you with your health.</h6>
                            <ul className='custom-list pb-3'>
                                <li className='text24'>Wellness</li>
                                <li className='text24'>Mental Health</li>
                                <li className='text24'>Qualified Doctors </li>
                            </ul>
                            <Link href="/contact"><a className="linkStyle pb-3" >Contact Us</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;