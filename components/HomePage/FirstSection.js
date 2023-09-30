/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import stethoscope from "../../public/images/content/stethoscopeWhite.png";
import Image from 'next/image';

const FirstSection = () => {
    return (
        <>
            <div className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <Image src={stethoscope} alt='stethoscope White' className='' />
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 itemCenter'>
                            <div className=''>
                                <p className='colorFont'>Custom Doctor Appointment Scheduling</p>
                                <h2 className='titleText'>"Excellence in Health Care, when you need it most."</h2>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>                  
        </>
    );
};

export default FirstSection;