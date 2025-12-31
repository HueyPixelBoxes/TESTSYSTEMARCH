
import GridTable from "./component/grid_table/GridTable";
import Carousel from './component/carousel/Carousel';
import useCarouselEventHandlers from './component/carousel/hook/CarouselEventHandler';
import getImagePaths from './component/carousel/api/CarouselApiCall';

function App() {

  return (
    <div className="App">

      <Carousel images={getImagePaths()}
                carouselEventHandlers={useCarouselEventHandlers}
      />

      <GridTable/>

    </div>
  );
}

export default App;

