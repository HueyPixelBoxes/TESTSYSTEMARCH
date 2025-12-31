
const CarouselBody = ({ imageUrl }) => {    
    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="
                md:w-full h-full 
                mx-auto 
                bg-center bg-cover duration-500
            "
        >

        </div>
    )
}

export default CarouselBody;