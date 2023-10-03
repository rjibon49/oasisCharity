/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import anthony from "../../public/images/content/Anthony_Nguyen.png";
import huma from "../../public/images/content/huma_javed.png";

import Image from 'next/image';

const Team = () => {
    return (
        <div className='mt-5 colorBg py-5'>
            <div className='container'>
                <div className='text-center'>
                    <p className='colorFont mb-3'>Experienced</p>
                    <p className='text40 pb-5'>All Team Members</p>
                </div>
                <div className='row'>
                    <div className='col-xxl- col-xl-6 col-lg-6 centerItem'>
                        <div className='teamBg'>
                            <div className='text-center'>
                            <Image src={anthony} alt='Anthony Nguyen' className='teamImage' />
                                <div className='teamContentbg text-start'>
                                    <h3 className='text24 pb-2'>Anthony Nguyen</h3>
                                    <h6 className='text18 pb-2'>Founder | CEO | Project Oasis Charity</h6>
                                    <p className='text18'>Dung 'Anthony' Nguyen is a Co-Founder and Chief Operations Officer of FWFA. Anthony was awarded a bachelor’s in accounting from California State University, San Bernardino.</p>
                                    <div className='d-flex align-item-center gap-3'>
                                        <button type="button" className="buttonStyle" data-bs-toggle="modal" data-bs-target="#anthony"> Know More </button>
                                        <i class="fa-brands fa-facebook iconColor"></i>
                                        <i class="fa-brands fa-linkedin iconColor"></i>
                                        <i class="fa-brands fa-skype iconColor"></i>
                                        <i class="fa-brands fa-instagram iconColor"></i>
                                    </div>
                                
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="anthony" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modelWidth">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <div className='text-center modalImage'>
                                                        <Image src={anthony} alt='Anthony Nguyen' className='teamImage' />
                                                    </div>
                                                    <div>
                                                        <h3 className='text24 pb-2'>Anthony Nguyen</h3>
                                                        <h6 className='text18 pb-2'>Founder | CEO | Project Oasis Charity</h6>
                                                    </div>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body text18">
                                                Dung 'Anthony' Nguyen is a Co-Founder and Chief Operations Officer of FWFA. Anthony was awarded a bachelor’s in accounting from California State University, San Bernardino.
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl- col-xl-6 col-lg-6 centerItem'>
                        <div className='teamBg'>
                            <div className='text-center'>
                                <Image src={huma} alt='Huma javed' className='teamImage' />
                            </div>
                            <div className='teamContentbg text-start'>
                                <h3 className='text24 pb-2'>Huma Javed</h3>
                                <h6 className='text18 pb-2'>Vice President | Project Oasis Charity</h6>
                                <p className='text18 pb-2'>As Vice President of Compliance and Grants, Huma assumes a pivotal role in overseeing all facets of the organization's operations, including development-focused research, project-based communication, compliance and business planning.</p>
                                <div className='d-flex align-item-center gap-3'>
                                    <button type="button" className="buttonStyle" data-bs-toggle="modal" data-bs-target="#humaJaved"> Know More </button>
                                    {/* <FontAwesomeIcon icon={faEnvelope} className='iconColor' /> */}
                                    <i className="fa-regular fa-envelope iconColor" ></i>
                                </div>
                            
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="humaJaved" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modelWidth">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className='text-center modalImage'>
                                                    <Image src={huma} alt='Huma javed' className='teamImage' />
                                                </div>
                                                <div>
                                                    <h3 className='text24 '>Huma Javed</h3>
                                                    <h6 className='text18 '>Vice President | Project Oasis Charity</h6>
                                                </div>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body text18">
                                                As Vice President of Compliance and Grants, Huma assumes a pivotal role in overseeing all facets of the organization's operations, including development-focused research, project-based communication, compliance and business planning. Huma brings a wealth of expertise to the domains of proposal development and project-based communication. With an impressive tenure spanning over six years in development-focused research, Huma's influence at Oasis Charity reached new heights when she embraced the role of Grant Proposal Writer. In this capacity, she exhibited exceptional proficiency in efficiently and effectively securing grants. Her unwavering dedication and strategic prowess in grant procurement significantly enriched the organization. Throughout her tenure, Huma has been deeply immersed in the art of proposal development, actively nurturing client relationships, and fostering open channels of communication. She firmly believes in the transformative power of teamwork and collaboration, viewing them as indispensable tools for overcoming challenges and realizing ambitious goals. Her personal goal is to advances the organizations overall but with a passion with her people of Pakistan. <br />
                                                Her guiding principle echoes the wisdom of John C. Maxwell: "Success is not a destination; it's a journey that requires adaptability, determination, and a great team working together towards a common vision." <br /> <br />
                                                Contact Details <br />
                                                Email: - huma@oasischarity.org
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
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

export default Team;