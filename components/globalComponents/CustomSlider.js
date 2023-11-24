import React, { useState, useEffect, useCallback } from 'react';

const CustomSlider = ({ slides, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const showNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides]);

  const showPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (autoplayInterval && autoplayInterval > 0) {
      intervalId = setInterval(showNextSlide, autoplayInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplayInterval, showNextSlide]);

  return (
    <div className="slider">
      <div className="slidesContainer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <button className="prevButton" onClick={showPrevSlide}>
        Previous
      </button>
      <button className="nextButton" onClick={showNextSlide}>
        Next
      </button>
      <div className="pagination">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => handlePaginationClick(index)} className={index === currentIndex ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;