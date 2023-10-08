import Link from 'next/link';
import React from 'react';
import CustomSlider from '../globalComponents/CustomSlider';
import slides from "../globalComponents/Slides";

const Service = () => {
    // const slides = ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 5', 'Slide 6'];

    // Adjust autoplayInterval as needed (in milliseconds)
  const autoplayInterval = 4000;


    return (
        <div className='colorBg py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-7 col-xl-7 col-lg-6'>
                        {/* <div className='p-4'>
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
                        </div> */}
                        <h1>Custom Slider Example</h1>
                        <CustomSlider slides={slides} autoplayInterval={autoplayInterval} />
                    </div>
                    <div className='col-xxl-5 col-xl-5 col-lg-6 textCenter'>
                        <div className='serviceWidth'>
                            <h5 className='colorFont'>Service</h5>
                            <h3 className='text40 pb-2'>Project Oasis Provides Personalized Services</h3>
                            <p className='text18 pb-2'>Our excellence in care goes beyond healthcare but the the well-being of the whole person.</p>
                            <Link href="/service"><a className="linkStyle" >All Service</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;