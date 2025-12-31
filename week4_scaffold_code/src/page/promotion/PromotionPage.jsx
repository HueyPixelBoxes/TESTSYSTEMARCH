import getImagePaths from "../../component/carousel/api/CarouselApiCall"
import Carousel from "../../component/carousel/Carousel"
import useCarouselEventHandlers from "../../component/carousel/hook/CarouselEventHandler"

const Promotion = () => {

    const images = getImagePaths();

    return (
        <Carousel images={images} 
                    carouselEventHandlers={useCarouselEventHandlers} />
    )
}

export default Promotion