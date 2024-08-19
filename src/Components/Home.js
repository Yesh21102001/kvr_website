import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Responsive.css"
import "./animation.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import card from "../assets/title_sepp_3.png";
import menu from "../assets/23819954_6771776.jpg";
import card4 from "../assets/4-1.jpg";
import card5 from "../assets/catering-banner.jpg";
import card6 from "../assets/Photo By Marriages in Tirumala - Wedding Planners.jfif";
import { MdLocationOn } from "react-icons/md";
import contact from "../assets/contact.png";
import { FiPhoneCall } from "react-icons/fi";
import card16 from "../assets/quote.png";
import card17 from "../assets/double-quotes.png";
import card10 from "../assets/IMG_20240605_222059.png";
import card11 from "../assets/cocktail-glasses.jpg";
import kvr from "../assets/Banner.png";
import kvr1 from "../assets/Banner10.png";

const Home = ({ aboutRef, categoryRef, contactRef }) => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const categoriesSection = categoryRef.current;
      const contactSection = contactRef.current;

      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const categoriesPosition = categoriesSection.getBoundingClientRect().top;
      const contactPosition = contactSection.getBoundingClientRect().top;

      const screenHeight = window.innerHeight;

      if (aboutPosition < screenHeight * 0.75) {
        setIsAboutVisible(true);
      } else {
        setIsAboutVisible(false);
      }

      if (categoriesPosition < screenHeight * 0.75) {
        setIsCategoriesVisible(true);
      } else {
        setIsCategoriesVisible(false);
      }

      if (contactPosition < screenHeight * 0.75) {
        setIsContactVisible(true);
      } else {
        setIsContactVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, categoryRef, contactRef]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop className="kvr-wrapper">
        <div>
          <img src={kvr} alt="Banner 1" height="700px" />
        </div>
        <div>
          <img src={kvr1} alt="Banner 2" height="700px" />
        </div>
      </Carousel>

      {/* About */}
      <div
        id='about'
        className="About"
        ref={aboutRef}
        style={{
          opacity: isAboutVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="row">
          <div className="col-5 about-image">
            <img
              src={card10}
              alt="aboutusimage"
              className={isAboutVisible ? "slide-in-from-left" : ""}
            />
          </div>
          <div className="col-7">
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "green",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
              className={isAboutVisible ? "slide-in-from-bottom" : ""}
            >
              Welcome to
            </h1>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#Ff204e",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
              className={isAboutVisible ? "slide-in-from-bottom" : ""}
            >
              KVR Catering and Events
            </h1>
            <div className="image-wrapper">
              <img src={card} style={{ width: "280px" }} />
            </div>
            <div
              className="paragraph"
              style={{
                marginTop: "20px",
                fontSize: "20px",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
            >

              <h6 className="text">
                <img
                  src={card16}
                  style={{ height: "30px", width: "30px", marginTop: "-20px" }}
                  className="img-hover1"
                />
                KVR Catering and Events as we grow, we never forget where we came
                from and what we are trying to achieve. Our loyal customers are
                big part of our success that helped us at every step of our
                journey by providing us continuous feedback. We will do whatever
                our customer demands to improve our services. We have remained
                true to our roots of promising to serve best quality food with the
                good taste. We have a Passion to succeed and earn respect in the
                industry made us to deliver excellent service and great taste. We
                do not believe in making false claims instead we offer honest
                advise, excellent taste and best prices. It has been our policy to
                treat every client with utmost integrity and the highest degree of
                professionalism. This is why Kvr Catering And Events today is considered
                a trusted name in the industry We deliver packed meals to various
                offices in Visakhapatnam and at present. We provide food with high
                quality and quantity. We pride ourselves on our excellent product
                range and efficient delivery of quality, hygienic food to our
                customers. We assure that the food make you mouth watery and get
                addicted to our food.
                <img
                  src={card17}
                  style={{ height: "30px", width: "30px", marginTop: "-20px" }}
                  className="img-hover"
                />
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div id='categories'
        className="Main" ref={categoryRef}>
        <div

          className={`Categories ${isCategoriesVisible ? "slide-in-from-bottom" : ""
            }`}
        >
          <h1
            style={{
              color: "#e75814",
              fontWeight: "700",
              fontFamily: "Reddit Sans Condensed, sans-serif",
              className: "cat"
            }}
          >
            Categories
          </h1>
          <div

            className="category-cards"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              className="category-card"
              style={{ width: "300px", margin: "10px" }}
            >
              <Link
                to="/GalleryMenu"
                style={{ color: "#3D63DD", textDecoration: "none" }}
              >
                <img src={menu} alt="Menu" className="category-image" />
                <h3 className="category-title">Menu</h3>
              </Link>
            </div>
            <div
              className="category-card"
              style={{ width: "300px", margin: "10px" }}
            >
              <Link
                to="/GalleryCatering"
                style={{ color: "#3D63DD", textDecoration: "none" }}
              >
                <img
                  src={card5}
                  alt="Catering Services"
                  className="category-image"
                />
                <h3 className="category-title">Catering Services</h3>
              </Link>
            </div>
            <div
              className="category-card"
              style={{ width: "300px", margin: "10px" }}
            >
              <Link
                to="/GalleryWedding"
                style={{ color: "#3D63DD", textDecoration: "none" }}
              >
                <img
                  src={card6}
                  alt="Wedding Pavilion"
                  className="category-image"
                />
                <h3 className="category-title">Wedding Pavilion</h3>
              </Link>
            </div>
            <div
              className="category-card"
              style={{ width: "300px", margin: "10px" }}
            >
              <Link
                to="/GallerySuppliers"
                style={{ color: "#3D63DD", textDecoration: "none" }}
              >
                <img src={card4} alt="Suppliers" className="category-image" />
                <h3 className="category-title">Suppliers</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div
        id='contact' className="contact-details row" ref={contactRef}>
        <div className="col-4">
          <h4
            style={{ color: "#e75814", fontWeight: "500" }}
            className={isContactVisible ? "slide-up" : ""}
          >
            <FiPhoneCall
              style={{
                marginRight: "10px",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
            />
            Contact Numbers
          </h4>
          <div className="d-flex">
            <p className={isContactVisible ? "slide-up" : ""} style={{ fontFamily: "Reddit Sans Condensed, sans-serif", }}>
              +91 99087 21199
            </p>
            <p
              className={isContactVisible ? "slide-up" : ""}
              style={{ fontFamily: "Reddit Sans Condensed, sans-serif", marginLeft: "20px" }}
            >
              +91 83090 22238
            </p>
          </div>
        </div>
        <div className="col-4">
          <h4 style={{ color: "#e75814", fontWeight: "500" }} className={isContactVisible ? "slide-up" : ""}>
            <MdLocationOn
              style={{
                marginRight: "10px",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
            />
            Address
          </h4>
          <p style={{ fontFamily: "Reddit Sans Condensed, sans-serif" }} className={isContactVisible ? "slide-up" : ""}>
            2nd Bus Stop, PM Palem, Visakhapatnam, 530041
          </p>
        </div>
        <div className="col-4">
          <h4 style={{ color: "#e75814", fontWeight: "500" }} className={isContactVisible ? "slide-up" : ""}>
            <MdLocationOn
              style={{
                marginRight: "10px",
                fontFamily: "Reddit Sans Condensed, sans-serif",
              }}
            />
            Email
          </h4>
          <p style={{ fontFamily: "Reddit Sans Condensed, sans-serif" }} className={isContactVisible ? "slide-up" : ""}>
            kvrcateringandevents@gmail.com
          </p>
        </div>
      </div>

      {/* contact form */}
      <div className="contact row">
        <div className={`col-6 ${isContactVisible ? "slide-up" : ""}`}>
          <h1
            style={{
              color: "#e75814",
              fontWeight: "700",
              fontFamily: "Reddit Sans Condensed, sans-serif",
            }}
          >
            Get In Touch
          </h1>

          <div className="Contact">
            <form className="contact-form">
              <div className="fields" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-group">
                  <label htmlFor="name">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={{ width: "320px" }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={{ width: "320px" }}
                  />
                </div>
              </div>

              <div className="fields" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={{ width: "320px" }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    style={{ width: "320px" }}
                  />
                </div>
              </div>

              <div className="fields" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    style={{ width: "320px" }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    style={{ width: "320px", height: "45px" }}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="button"
                style={{
                  width: "710px",
                  fontFamily: "Reddit Sans Condensed, sans-serif",
                  backgroundColor: "#E75814",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className={`col-6 d-flex justify-content-center align-items-center ${isContactVisible ? "img-slide-in" : ""
            }`}
        >
          <img src={contact} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Home;