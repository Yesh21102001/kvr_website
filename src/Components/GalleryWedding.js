/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import wedding2 from "../assets/WeddingImages/IMG-20220614-WA0010.jpg";
import wedding8 from "../assets/WeddingImages/IMG-20230211-WA0035.jpg";
import wedding9 from "../assets/WeddingImages/IMG-20230221-WA0012.jpg";
import wedding13 from "../assets/WeddingImages/IMG-20231109-WA0032.jpg";
import wedding15 from "../assets/WeddingImages/IMG-20240215-WA0017.jpg";
import wedding16 from "../assets/WeddingImages/IMG-20240409-WA0023.jpg";
import wedding17 from "../assets/WeddingImages/IMG-20240428-WA0020.jpg";
import wedding18 from "../assets/WeddingImages/IMG-20240609-WA0017.jpg";
import set from "../assets/WeddingImages/south-korea-skyline-seoul-cityscape-south-korea.jpg";
import wedding19 from "../assets/WeddingImages/IMG-20220221-WA0015.jpg";
import wedding20 from "../assets/WeddingImages/IMG-20230211-WA0026.jpg";
import wedding21 from "../assets/WeddingImages/IMG-20220619-WA0016.jpg";
import wedding22 from "../assets/WeddingImages/IMG-20221026-WA0053.jpg";
import wedding23 from "../assets/WeddingImages/IMG_20230228_112554.jpg";
import banner from "../assets/f481b2e748fe0b8b47101b56d58e7081.jpg";
import "./GalleryCatering.css";

const GalleryWedding = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5  // Trigger when 50% of the image is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        } else {
          entry.target.classList.remove("slide-in"); // Remove class when not intersecting
        }
      });
    }, options);

    imageRefs.current.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="gallery-container">
        <img src={banner} alt="wedding-banner" className="banner" />
        <div className="content">
          <h1 className="heading">Wedding Pavilion</h1>
        </div>
      </div>
      <div className="image-grid">
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding2} alt="Wedding 2" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding8} alt="Wedding 8" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding9} alt="Wedding 9" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding13} alt="Wedding 13" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding15} alt="Wedding 15" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding16} alt="Wedding 16" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding17} alt="Wedding 17" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding18} alt="Wedding 18" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding19} alt="Wedding 19" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding20} alt="Wedding 20" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding21} alt="Wedding 21" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding22} alt="Wedding 22" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={wedding23} alt="Wedding 23" className="grid-img" />
      </div>
    </>
  );
};

export default GalleryWedding;
