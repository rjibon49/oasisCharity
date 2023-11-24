import React, { useState } from 'react';
import Image from 'next/image';
import doctor1 from "../../public/images/content/doctor1.png";
import doctor2 from "../../public/images/content/doctor2.png";
import doctor3 from "../../public/images/content/doctor3.png";
import doctor4 from "../../public/images/content/doctor4.png";
import Lightbox from './LightBox'; // Import the Lightbox component

const OurDoctor = () => {
  const images = [doctor1, doctor2, doctor3, doctor4];
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxIsOpen(true);
  };

  return (
    <div className='my-5'>
      <div className='py-5'>
        <div className='w-75 mx-auto'>
          <div className='pb-4 text-center'>
            <h5 className='colorFont'>Our Doctor</h5>
          </div>
          <div className='d-flex justify-content-center flex-wrap gap-5'>
            {images.map((image, index) => (
              <div key={index} className='DoctorImageBg' onClick={() => openLightbox(image)}>
                <Image src={image} alt={`Doctor ${index + 1}`} className='' />
              </div>
            ))}
          </div>
          {currentImage && (
            <Lightbox
              isOpen={lightboxIsOpen}
              onClose={() => setLightboxIsOpen(false)}
              image={currentImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OurDoctor;