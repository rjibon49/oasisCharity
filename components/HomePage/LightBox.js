import Image from 'next/image';
import React from 'react';

const Lightbox = ({ isOpen, onClose, image }) => {
  return (
    <div className={`lightbox ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-nav">
          <button onClick={() => onClose()} className='closeButton'>X</button>
        </div>
        <div className="lightbox-images">
          <div className={`lightbox-image active`}>
            <Image src={image} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;