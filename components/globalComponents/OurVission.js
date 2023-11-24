import React from 'react';
import vission from "../../public/images/content/vissionBoard.png";
import Image from 'next/image';

const OurVission = () => {
    return (
        <>
            <div className='my-5 py-5 bgImage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 itemCenter'>
                            <div className='missonTextWidth'>
                                <h2 className='headingH2'>Our vision</h2>
                                <p className='text24'>Our vision is to end poverty with innovation and technology.</p>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className=''>
                                <Image src={vission} alt='Vission Board' className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurVission;