import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all"
    aria-label="Previous slide"
  >
    <ChevronLeft className="h-12 w-12" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all"
    aria-label="Next slide"
  >
    <ChevronRight className="h-12 w-12" />
  </button>
);

export default function NewCollection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="relative mx-auto h-[753px] w-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-[70%] sm:object-top"
            src="src\assets\images\newcollection1.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="relative mx-auto h-[753px] w-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src="src\assets\images\newcollection1.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="relative mx-auto h-[753px] w-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src="src\assets\images\newcollection1.jpg"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
}