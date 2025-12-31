import React, { useEffect, useState } from 'react';

const useCarouselEventHandlers = (images) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isCarouselActive, setIsCarouselActive] = useState(false);
    
    useEffect(() => {
        if (!isCarouselActive) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 2000); // Change slide every 2 seconds

            return () => clearInterval(interval);
            
        } else {
            // The user uses our Carousel features, 
            // set the Carousel active for 5 seconds
            setTimeout(() => {
                setIsCarouselActive(false);
            }, 5000)
        }
    }, [images.length, isCarouselActive]);
    
    const goToSlide = (index) => {
        setCurrentIndex(index)
        setIsCarouselActive(true)
    };
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsCarouselActive(true)
    };
    
    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsCarouselActive(true)
    };
    
    return { currentIndex, goToSlide, goToPrevious, goToNext};
}

export default useCarouselEventHandlers;