import CarouselBody from './child_component/carousel_body/CarouselBody';
import {CarouselButton, BACK, NEXT} from './child_component/carousel_button/CarouselButton';
import CarouselNavigationDots from './child_component/carousel_navigation_dot/CarouselNavigationDots';

const Carousel = ( {images, carouselEventHandlers} ) => {

  const {currentIndex, goToPrevious, goToNext, goToSlide} 
    = carouselEventHandlers(images);

  return (
    <div className="
      relative xs:w-full md:w-1/2 mx-auto h-[400px]
    ">
 
      <CarouselBody imageUrl={images[currentIndex]}/>  
      
      <CarouselButton direction={BACK} onClickButtonAction={goToPrevious} />
      <CarouselButton direction={NEXT} onClickButtonAction={goToNext} />
      
      <CarouselNavigationDots images={images} 
                              currentIndex={currentIndex} 
                              onClickButtonAction={goToSlide} /> 
      
    </div>
  );
};

export default Carousel;