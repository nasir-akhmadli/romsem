import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ala from '../assets/svgs/introsectioncarusel.svg'
import slickone from '../assets/images/slickk1.jpg'
import slicktwo from '../assets/images/slickk2.jpg'
import slickthree from '../assets/images/slickk3.jpg'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000
  };
  return (
    <div className="carusel">
        <Slider {...settings}>
      <div>
        <img src={slickone} alt="" />
      </div>
      <div>
      <img src={slicktwo} alt="" />
      </div>
      <div>
      <img src={slickthree} alt="" />
      </div>
      
    </Slider>
    </div>
  );
}