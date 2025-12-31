import React, { useState, useEffect } from 'react';

// IF YOU WANT A PROMISING FUTURE 
// AND YOUR TEAMMATES LOVE YOU, 
// YOUR FINAL CODE SHOULD NOT LOOK LIKE BELOW

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[400px]">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      
      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
      </div>
      
      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;