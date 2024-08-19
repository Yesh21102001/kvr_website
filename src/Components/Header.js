import React from "react";
import card10 from "../assets/IMG_20240605_222059.png";
import { Link } from "react-router-dom";
import { MdAlignHorizontalRight } from "react-icons/md";

const Header = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      window.scrollTo({
        top: categoriesSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={styles.stickyHeader}>
      <div style={styles.headerBackground}>
        <div style={styles.backgroundPart1}></div>
        <div style={styles.backgroundPart2}></div>
        <div style={styles.backgroundPart3}></div>
      </div>

      <div style={styles.headerContent}>
        <img src={card10} style={styles.logo} alt="Logo" className="logokvr" />
        <h2 style={styles.title}>Catering and Events</h2>
        <div style={styles.navigations}>
          <Link
            className="nav-link"
            aria-current="page"
            to="/"
            onClick={scrollToTop}
            style={styles.navLink}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/"
            onClick={scrollToAbout}
            style={styles.navLink}
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/"
            onClick={scrollToCategories}
            style={styles.navLink}
          >
            Categories
          </Link>
          <Link
            className="nav-link"
            to="/"
            onClick={scrollToContact}
            style={styles.navLink}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <style jsx>{`
  @media (max-width: 768px) {
    .nav-link {
      margin-left: 20px !important;
    }
    h2 {
      font-size: 1.5rem !important;
    }
    
  }

  @media (max-width: 480px) {
    .nav-link {
      margin-left: 10px !important;
      font-size: 0.6rem !important;
      margin-top: 10px;
    }

     h2 {
      font-size: 1.0rem !important;
      color: red; 
      margin-top: 10px;
      margin-left: 0;
      text-align: center;
    }

    .logokvr {
      max-width: 70px;
      margin-top: 10px;
      margin-left: -10px;
    }

  }
`}</style>
    </div>
  );
};

const styles = {
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "#F1F1F1",
  },
  headerBackground: {
    position: "relative",
    height: "50px",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  backgroundPart1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "15px",
    backgroundColor: "#C46E20",
    zIndex: 1,
  },
  backgroundPart2: {
    position: "absolute",
    top: 0,
    left: "50%",
    width: "50%",
    height: "50px",
    backgroundColor: "#C46E20",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 35px))",
    zIndex: 1,
  },
  backgroundPart3: {
    position: "absolute",
    top: "15px",
    left: "50%",
    width: "50%",
    height: "35px",
    backgroundColor: "#C46E20",
    transform: "skewX(50deg)",
    transformOrigin: "top left",
    zIndex: 1,
  },
  headerContent: {
    height: "70px",
    backgroundColor: "#F1F1F1",
    position: "relative",
    top: "-35px",
    bottom: "-20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  logo: {
    height: "90px",
    marginLeft: "10px",
    marginTop: "20px"
  },
  title: {
    marginTop: "30px",
    color: "#203C25",
    fontFamily: "Reddit Sans Condensed, sans-serif",
    fontWeight: "600",
    fontSize: "2rem",
    marginLeft: "-650px"
  },
  navigations: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    marginLeft: "70px",
    color: "#0F3D3E",
    textDecoration: "none",
    fontFamily: "Reddit Sans Condensed, sans-serif",
    marginTop: "50px",
    fontSize: "20px",
    fontWeight: "600"
  },
};

export default Header;