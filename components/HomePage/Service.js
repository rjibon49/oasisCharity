import React from 'react';

const Service = () => {
    return (
        <div className='colorBg py-5'>
            <div className='container'>
                <div className='row'>
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
                    <div className='col-xxl-6 col-xl-6 col-lg-6 textCenter'>
                        <div className='serviceWidth'>
                            <h5 className='colorFont'>Service</h5>
                            <h3 className='text40'>Project Oasis Provides Personalized Services</h3>
                            <p className='text18'>Our excellence in care goes beyond healthcare but the the well-being of the whole person.</p>
                            <button type="" className="buttonStyle">All Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;