import React from 'react';
import docGroup from "../../public/images/content/aboutUsDoctorGroup.png";
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className='colorBg p-5 mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div>
                            <h5 className='colorFont'>About Us</h5>
                            <h3 className='text40'>Book your clinic appointment with an ease</h3>
                            <h6 className='text18'>A future healthy and future of joy is our mission. We looking forward to you schedule time with us to help you with your health.</h6>
                            <ul className='custom-list'>
                                <li className='text24'>Wellness</li>
                                <li className='text24'>Mental Health</li>
                                <li className='text24'>Qualified Doctors </li>
                            </ul>
                            <Link href="/contact"><a className="linkStyle" >Contact Us</a></Link>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6'>
                        <Image src={docGroup} alt='Important persion healthcare doctor' className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;