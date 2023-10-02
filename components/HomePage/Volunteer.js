import Image from 'next/image';
import React from 'react';
import portraitFemale from "../../public/images/content/portraitFemaleDoctor.png";

const Volunteer = () => {
    return (
        <div className='mt-5 volunteerBg'>
            <div className='container'>
                <div className='row revarce'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 volunteerText'>
                        <div>
                            <h3 className='text40 pb-3 volunteerTitle'>Join With Us as a Volunteer</h3>
                            <p className='text18 pb-3'>Please reach out to us and start the discussion on how you can serve with us?  We have training courses and opportunity to be part of the team. Please reach out to our CEO, Anthony Nguyen (<span className='colorText'>anguyen@oasischarity.org</span> ), to share your interest. Our first interview is at the top level to show that we appreciate your time, talent, and treasure in supporting those in needs.  Join us as a volunteer.</p>
                            <button type="" className="buttonStyle">Registration Here</button>
                        </div>
                    </div>
                    <div className='col-xxl-5 col-xl-5 col-lg-5'>
                        <div className='mb-4'>
                            <Image src={portraitFemale} alt='portraitFemaleDoctor' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;