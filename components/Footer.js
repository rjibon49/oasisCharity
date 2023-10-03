import React from 'react';
import slider1 from "../public/images/content/slider1.png";
import slider2 from "../public/images/content/slider2.png";
import slider3 from "../public/images/content/slider3.png";
import slider4 from "../public/images/content/slider4.png";
import slider5 from "../public/images/content/slider5.png";
import logo from "../public/images/logo/oasisLogo.png";

import { Autoplay, Navigation, Pagination } from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'; 
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='mt-5 footerBgColor py-5'>
            <div className='container '>
                <div className='text-center pb-3'>
                    <h5 className='colorFont pb-2' >Feedbacks and Comments from our Patients</h5>
                    <p className='text40'>See What Are The Patients Saying About Us</p>
                </div>

                <div className=' pb-5'>
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
                            <div className='text-center mb-3'>
                                <Image src={slider1} className='' alt='Testimonial 1' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center mb-3'>
                                <Image src={slider2} className='' alt='Testimonial 2' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center mb-3'>
                                <Image src={slider3} className='' alt='Testimonial 3' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center mb-3'>
                                <Image src={slider4} className='' alt='Testimonial 4' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center mb-3'>
                                <Image src={slider5} className='' alt='Testimonial 5' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='footerHeight'></div>

                <div className='row'>
                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-7 textCenter' >
                        <div>
                            <div className='mb-3'>
                                <Link href="/"><a><Image src={logo} alt='Oasis Footer Logo' className='' /></a></Link>
                            </div>
                            <div className='footerTextWidth'>
                                <p className='text18'>We always available to give you the best service in order to get the best experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-5 textCenter' >
                        <div>
                            <div className=' mb-3'>
                                <label htmlFor="subscribe" className='text24'>Subscribe</label>
                                <input type="text" className="subscribeInput" id="subscribe" placeholder="Emaile" />
                            </div>
                            <div className='py-5 footerMenu'>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link" aria-current="page">Home</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#"><a className="nav-link" >About Us</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#"><a className="nav-link" >Contact Us</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#"><a className="nav-link">Privacy & Policy</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <p className='text14'>Follow us on social:</p>
                    <div className='d-flex flex-wrap gap-2'>
                        <i class="fa-brands fa-facebook footerIcon"></i>
                        <i class="fa-brands fa-instagram footerIcon"></i>
                        <i class="fa-brands fa-linkedin footerIcon"></i>
                        <i class="fa-brands fa-youtube footerIcon"></i>
                        <i class="fa-brands fa-pinterest footerIcon"></i>
                        <i class="fa-brands fa-twitter footerIcon"></i>
                    </div>
                </div>
                <div className='footerBottomLine'></div>
                <div className='text-center pt-5'>
                    <p className='text18'>© Copyright Project OASIS 2023. All Right Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;