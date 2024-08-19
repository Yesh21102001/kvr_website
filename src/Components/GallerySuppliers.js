import React, { useEffect, useRef } from "react";
import "./GalleryCatering.css";  // Ensure correct path for CSS
import banner from "../assets/10054.jpg";
import suppliers1 from "../assets/SupplierImages/IMG_20230120_124407.jpg";
import suppliers2 from "../assets/SupplierImages/IMG_20230120_205427.jpg";
import suppliers3 from "../assets/SupplierImages/IMG_20230208_184454.jpg";
import suppliers4 from "../assets/SupplierImages/IMG_20230208_185343.jpg";
import suppliers5 from "../assets/SupplierImages/IMG_20230208_185404.jpg";
import suppliers6 from "../assets/SupplierImages/IMG_20230224_162319.jpg";
import suppliers7 from "../assets/SupplierImages/IMG_20230228_112926.jpg";
import suppliers8 from "../assets/SupplierImages/IMG_20230228_113022.jpg";
import suppliers9 from "../assets/SupplierImages/IMG_20230322_193349.jpg";
import suppliers10 from "../assets/SupplierImages/IMG_20230322_193549.jpg";
import suppliers11 from "../assets/SupplierImages/IMG_20230322_195608.jpg";
import suppliers12 from "../assets/SupplierImages/IMG_20230322_195738.jpg";
import suppliers13 from "../assets/SupplierImages/IMG_20230326_181344.jpg";
import suppliers14 from "../assets/SupplierImages/IMG_20230407_063941.jpg";
import suppliers15 from "../assets/SupplierImages/IMG_20230407_064000.jpg";
import suppliers16 from "../assets/SupplierImages/IMG_20230805_170738.jpg";
import suppliers17 from "../assets/SupplierImages/IMG_20230806_123600.jpg";
import suppliers18 from "../assets/SupplierImages/IMG_20231109_172528.jpg";
import suppliers19 from "../assets/SupplierImages/IMG-20221026-WA0012.jpg";
import suppliers20 from "../assets/SupplierImages/IMG-20240204-WA0004.jpg";
import suppliers21 from "../assets/SupplierImages/IMG-20240204-WA0013.jpg";
import suppliers22 from "../assets/SupplierImages/IMG-20240204-WA0014.jpg";
import suppliers23 from "../assets/SupplierImages/IMG-20240204-WA0015.jpg";
import suppliers24 from "../assets/SupplierImages/IMG-20240302-WA0012.jpg";
import suppliers25 from "../assets/SupplierImages/IMG-20240330-WA0013.jpg";

const GallerySuppliers = () => {
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
        <img src={banner} alt="suppliers-banner" className="banner" />
        <div className="content">
          <h1 className="heading">Suppliers</h1>
        </div>
      </div>
      <div className="image-grid">
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers1} alt="Supplier 1" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers2} alt="Supplier 2" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers3} alt="Supplier 3" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers4} alt="Supplier 4" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers5} alt="Supplier 5" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers6} alt="Supplier 6" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers7} alt="Supplier 7" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers8} alt="Supplier 8" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers9} alt="Supplier 9" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers10} alt="Supplier 10" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers11} alt="Supplier 11" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers12} alt="Supplier 12" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers13} alt="Supplier 13" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers14} alt="Supplier 14" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers15} alt="Supplier 15" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers16} alt="Supplier 16" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers17} alt="Supplier 17" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers18} alt="Supplier 18" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers19} alt="Supplier 19" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers20} alt="Supplier 20" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers21} alt="Supplier 21" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers22} alt="Supplier 22" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers23} alt="Supplier 23" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers24} alt="Supplier 24" className="grid-img" />
        <img ref={(ref) => imageRefs.current.push(ref)} src={suppliers25} alt="Supplier 25" className="grid-img" />
      </div>
    </>
  );
};

export default GallerySuppliers;