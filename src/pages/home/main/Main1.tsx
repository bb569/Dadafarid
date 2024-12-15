
// function Main1() {
//   return (
//     <img className="w-screen mt-14" src="https://dadafarid.com/wp-content/uploads/2024/11/photo_2024-11-12_11-50-08.jpg" />

//   )
// }

// export default Main1
import { Link } from "react-router-dom";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasicExample(): JSX.Element {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" className="relative top-20 ">
        <div className="w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Link to="/products/clothes">
            <img
              src="https://dadafarid.com/wp-content/uploads/2024/11/photo_2024-11-12_11-50-08.jpg"
              className="block w-full"
              alt="..."
            />
            </Link>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          ><Link to="/products/laptop">
            <img
              src="https://dadafarid.com/wp-content/uploads/2024/11/photo_2024-11-12_11-50-11.jpg"
              className="block w-full"
              alt="..."
              /> </Link>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            </div>
          </TECarouselItem>
          
        </div>
      </TECarousel>
    </>
  );
}