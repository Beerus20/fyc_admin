import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { image } from "../../../assets";

const data = [image, image, image, image, image, image, image];

const Slide = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="mobile_slide_container">
      <Slider {...settings}>
        <div className="slide_image">
          <img src={image} alt="" className="image_carousel" />
        </div>
        <div className="slide_image">
          <img src={image} alt="" className="image_carousel" />
        </div>
      </Slider>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards_container">
      {data.map((item, i) => (
        <img
          key={"image " + Math.random()}
          src={item}
          alt={"image " + Math.random()}
          className="card_image"
        />
      ))}
    </div>
  );
};

export { Slide, Cards };
