import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import card10 from "../assets/IMG_20240605_222059.png";
import card12 from "../assets/whatsapp.png";
import card13 from "../assets/facebook.png";
import card14 from "../assets/instagram.png";
import "./Footer.css"
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  const navigateAndScroll = (path, hash) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(hash);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }, 0);
  };
  const navigateAndScrollToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={card10} alt="Logo" className="footer-logo" />
          <h3>Catering and Events</h3>
        </div>
        <div className="footer-section">
          <h5>CATEGORIES</h5>
          <div className="footer-links">
            <div onClick={() => navigateAndScrollToTop("/GalleryMenu")}>Menu</div>
            <div onClick={() => navigateAndScrollToTop("/GalleryCatering")}>Catering Services</div>
            <div onClick={() => navigateAndScrollToTop("/GallerySuppliers")}>Suppliers</div>
            <div onClick={() => navigateAndScrollToTop("/GalleryWedding")}>Wedding Pavilion</div>
          </div>
        </div>
        <div className="footer-section">
          <h5>QUICK LINKS</h5>
          <div className="footer-links">
            <div onClick={() => navigate("/")}>Home</div>
            <div onClick={() => navigateAndScroll("/", "about")}>About</div>
            <div onClick={() => navigateAndScroll("/", "categories")}>Categories</div>
            <div>Gallery</div>
            <div onClick={() => navigateAndScroll("/", "contact")}>Contact Us</div>
          </div>
        </div>
        <div className="footer-section">
          <h5>CONTACT</h5>
          <p>Address: 2nd Bus Stop, PM Palem, Visakhapatnam, 530041</p>
          <p>Phone: <a href="tel:+919908721199">99087 21199</a></p>
          <p>Email: <a href="mailto:gurunadhjyothi.com">gurunadhjyothi.com</a></p>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-bottom">
        <p>© 2023 All Rights Reserved. Development by PJY</p>
        <div className="footer-social">
          <a href="https://www.whatsapp.com/">
            <img src={card12} alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={card13} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/gurunadh_kvr/">
            <img src={card14} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;