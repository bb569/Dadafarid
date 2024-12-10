import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Main5(): JSX.Element {
    return (
        <>
            <TECarousel showControls showIndicators ride="carousel" className="relative top-20">
                <div className="flex justify-center overflow-hidden ">
                    <TECarouselItem
                        itemID={1}
                        className="relative hidden w-full duration-[600ms]"
                    >
                        <div className="flex justify-around relative mb-16 w-full h-full" dir="rtl">
                            <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us04.jpg" alt="" />
                            <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us06.jpg" alt="" />
                            <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us05.jpg" alt="" />

                        </div>
                        <div className="absolute  inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">

                        </div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative hidden w-full duration-[600ms]"

                    > <div className="flex justify-around relative mb-16 w-full h-full" dir="rtl">

                            <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us03.jpg" alt="" />
                            <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us02.jpg" alt="" />
                        
                        <img className="cursor-pointer hover:bottom-5 relative transition duration-700 w-32 h-32" src="https://dadafarid.com/wp-content/uploads/2024/11/us01.jpg" alt="" />
                        </div>
                        <div className="absolute  inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                        </div>
                    </TECarouselItem>

                </div>
            </TECarousel>
        </>
    );
}