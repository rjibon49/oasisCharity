import Link from 'next/link';
import React from 'react';
import CustomSlider from '../globalComponents/CustomSlider';
import slides from "../globalComponents/Slides";
import { Autoplay, Navigation, Pagination } from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'; 

const Service = () => {
    // const slides = ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 5', 'Slide 6'];

    // Adjust autoplayInterval as needed (in milliseconds)
//   const autoplayInterval = 4000;
// autoplayInterval={autoplayInterval}


    return (
        <div className='colorBg py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7'>
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
                        {/* <h1>Custom Slider Example</h1> */}
                        {/* <CustomSlider slides={slides}  /> */}
                        <Swiper
                        // slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 40,
                        //     },
                        //     1024: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 20,
                        //     },
                        //     1440: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 20,
                        //     },
                        // }}
                        modules={[ Autoplay, Navigation, Pagination]}
                        className="mySwiper"
                        >
                            <SwiperSlide>
                                <div key="slide1" className='py-5'>
                                    <div className='serviceBg'>
                                        <div className='serviceBody'>
                                            <div>
                                                <h5 className='colorFont'>Mental Health</h5>
                                                <p className='text18'>Ensure that your psychological needs and comfort are addressed with confidentiality.</p>
                                            </div>
                                            <div className='vertical-line'></div>
                                            <div>
                                                <h5 className='colorFont'>Medical</h5>
                                                <p className='text18'>Covers various topics with your doctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div key="slide2" className='py-5'>
                                    <div className='serviceBg'>
                                        <div className='serviceBody'>
                                            <div>
                                                <h5 className='colorFont'>Wellness</h5>
                                                <p className='text18'>This can be from financial to work-life burnout, exercise, religious support, and much more.</p>
                                            </div>
                                                <div className='vertical-line'></div>
                                            <div>
                                                <h5 className='colorFont'>Urgent Care</h5>
                                                <p className='text18'>Care that is in an emergency for our partners in rural countryside.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div key="slide3" className='py-5'>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='col-xxl-5 col-xl-5 col-lg-5 textCenter'>
                        <div className='serviceWidth'>
                            <h5 className='colorFont'>Service</h5>
                            <h3 className='text40 pb-2'>Project Oasis <br />Provides <br />Personalized Services</h3>
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