import React from 'react';
import Image from 'next/image';
import doctor1 from "../../public/images/content/doctor1.png"
import doctor2 from "../../public/images/content/doctor2.png"
import doctor3 from "../../public/images/content/doctor3.png"
import doctor4 from "../../public/images/content/doctor4.png"

const OurDoctor = () => {
    return (
        <div className='my-5'>
            <div className='py-5'>
                <div className='w-75 mx-auto'>
                    <div className='pb-4'>
                        <h5 className='colorFont'>Our Doctor</h5>
                    </div>
                    <div className='d-flex justify-content-between flex-rap gap-5'>
                        <div className='DoctorImageBg'>
                            <Image src={doctor1} alt='Doctor 1' className='' />
                        </div>
                        <div className='DoctorImageBg'>
                            <Image src={doctor2} alt='Doctor 2' className='' />
                        </div>
                        <div className='DoctorImageBg'>
                            <Image src={doctor3} alt='Doctor 3' className='' />
                        </div>
                        <div className='DoctorImageBg'>
                            <Image src={doctor4} alt='Doctor 4' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDoctor;