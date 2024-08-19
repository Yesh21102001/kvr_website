import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menu from "../assets/MenuImages/Veg_Meals.png";
import menu1 from "../assets/MenuImages/Black and Gold Classic Background A4 Document.png";
import menu2 from "../assets/MenuImages/Black and Gold Classic Background A4 Document_20240627_225120_0008.png";
import menu3 from "../assets/MenuImages/Black and Gold Classic Background A4 Document_20240626_222338_0003.png";
import menu4 from "../assets/MenuImages/Black and Gold Classic Background A4 Document_20240626_222338_0002.png";
import menu5 from "../assets/MenuImages/Black and Gold Classic Background A4 Document_20240626_222338_0001.png";
import menu6 from "../assets/MenuImages/10.png";
import banner from "../assets/banner.jpg";
import "./menu.css";
import "./GalleryCatering.css";

const GalleryMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <div className="slick-next">Next</div>,
    prevArrow: <div className="slick-prev">Prev</div>,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <>
      <div className="gallery-container">
        <img src={banner} alt="catering-banner" className="banner" />
        <div className="content">
          <h1 className="heading">Our Menu</h1>
        </div>
      </div>
      <div className="menu-section">
        <h1 className="menu-heading">Our Veg Menu</h1>
        <Slider {...settings}>
          <div className="slider-item">
            <img src={menu} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu2} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu6} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu6} alt="slide_image" className="slider-image" />
          </div>
        </Slider>
      </div>
      <div className="menu-section">
        <h1 className="menu-heading">Our Non-Veg Menu</h1>
        <Slider {...settings}>
          <div className="slider-item">
            <img src={menu1} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu3} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu4} alt="slide_image" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src={menu5} alt="slide_image" className="slider-image" />
          </div>
          
        </Slider>
      </div>
    </>
  );
};

export default GalleryMenu;