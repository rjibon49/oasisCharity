import React from 'react';
import mission from "../../public/images/content/missionBoard.png";
import Image from 'next/image';

const OurMission = () => {
    return (
        <>
            <div className='mt-5 bgImage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className=''>
                                <Image src={mission} alt='Mission Board' className='' />
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 itemCenter'>
                            <div className='missonTextWidth'>
                                <h2 className='headingH2'>Our Mission</h2>
                                <p className='text24'>Project Oasis Charity, Inc. mission is to comfort and heal the sick and develop leaders to carry out charity works.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurMission;