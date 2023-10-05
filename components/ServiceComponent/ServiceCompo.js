import React from 'react';

const ServiceCompo = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='text-center'>
                    <h5 className='colorFont pb-2'>Services</h5>
                    <h3 className='text40 pb-2'>Project Oasis Provides <br /> Personalized Services</h3>
                    <h6 className='text18 pb-2'>Our excellence in care goes beyond healthcare but the the well-being of the whole person.</h6>
                </div>
                <div className='py-5'>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className='p-4'>
                                <div className='serviceBg'>
                                    <div className='serviceBody'>
                                        <div>
                                            <h5 className='colorFont'>Mental Health</h5>
                                            <p className='text18'>Ensure that you psychological needs and comfort is addressed with confidentiality.</p>
                                        </div>
                                        <div className='vertical-line'></div>
                                        <div>
                                            <h5 className='colorFont'>Medical</h5>
                                            <p className='text18'>Covers various topic with your doctor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className='p-4'>
                                <div className='serviceBg'>
                                    <div className='serviceBody'>
                                        <div>
                                            <h5 className='colorFont'>Wellness</h5>
                                            <p className='text18'>This can be from financial to work-life burnout, exercise, religious support, and much more.</p>
                                        </div>
                                        <div className='vertical-line'></div>
                                        <div>
                                            <h5 className='colorFont'>Urgent Care</h5>
                                            <p className='text18'>Care that is in an emergency for our partners in rural country side.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className='p-4'>
                                <div className='serviceBg'>
                                    <div className='serviceBody'>
                                        <div>
                                            <h5 className='colorFont'>Home Health</h5>
                                            <p className='text18'>From in-patient to out-patient, we bring you the health services to your home.</p>
                                        </div>
                                        <div className='vertical-line'></div>
                                        <div>
                                            <h5 className='colorFont'>Case Management</h5>
                                            <p className='text18'>We treat each patient with personalized care.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCompo;