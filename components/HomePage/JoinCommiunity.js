import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import commiunity from "../../public/images/content/commiunityTable.png"

const JoinCommiunity = () => {
    return (
        <div className='colorBg p-5 mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7'>
                        <Image src={commiunity} alt='commiunityTable' className='' />
                    </div>
                    <div className='col-xxl-5 col-xl-5 col-lg-5 textCenter'>
                        <div>
                            <h3 className='text40 mb-3'>Join Our Learning Community</h3>
                            <h6 className='text18 mb-3'>Courses are free for all of our students.  We may have grants to support workforce develop, reach out to us if you are interested in Internship program.  We are working on a missionary program to help those in need around the world.  </h6>
                            <button className="  buttonStyleGreen">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommiunity;