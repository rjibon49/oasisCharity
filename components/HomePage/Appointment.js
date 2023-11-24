import React from 'react';
import Image from 'next/image';
import portraitMale from "../../public/images/content/portraitSmilingMaleDoctor.png";
import AppointmentForm from '../globalComponents/AppointmentForm';

const Appointment = () => {
    return (
        <div className='my-5 appointmentBg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-5'>
                        <div className='text-center'>
                            <Image src={portraitMale} alt='portrait Smiling Male Doctor' className='portraitMaleImage' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-7 textCenter'>
                        <div className='appointmentText'>
                            <p className='text40 pb-4'>Schedule An Appointment</p>
                            <AppointmentForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;