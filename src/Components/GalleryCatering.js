import React, { useEffect, useRef } from "react";
import catering1 from "../assets/CateringImages/IMG_20220204_190849.jpg";
import catering2 from "../assets/CateringImages/IMG_20230322_193452.jpg";
import catering3 from "../assets/CateringImages/IMG_20230322_193504.jpg";
import catering4 from "../assets/CateringImages/IMG_20230208_184248.jpg";
import banner from "../assets/catering-banner.jpg";
import "./GalleryCatering.css";  

const GalleryCatering = () => {
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
        <img src={banner} alt="catering-banner" className="banner" />
        <div className="content">
          <h1 className="heading">Catering</h1>
        </div>
      </div>
      <div className="image-grid">
        <img ref={(ref) => imageRefs.current.push(ref)} src={catering1} alt="Wedding 17" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={catering2} alt="Wedding 9" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={catering3} alt="Wedding 17" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={catering4} alt="Wedding 9" className="grid-img" />
      </div>
    </>
  );
};

export default GalleryCatering;
