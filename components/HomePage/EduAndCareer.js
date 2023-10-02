import React from 'react';
import study from "../../public/images/content/groupStudy.png";
import Image from 'next/image';

const EduAndCareer = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-5 col-xl-5 col-lg-5 textCenter'>
                        <div className='mb-5'>
                            <h3 className='text40 pb-2'>Education & Career Advancement Courses</h3>
                            <p className='text18 pb-2'>Learn from our expert and learn professional skills to start a career and use to help others.  Please a look at our courses, they are free for our students.</p>
                            <button type="submit" className="buttonStyleGreen">Enroll Now</button>
                        </div>
                    </div>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 textCenter'>
                        <div>
                            <Image src={study} alt='Group Study' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduAndCareer;