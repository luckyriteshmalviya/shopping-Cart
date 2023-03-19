import React from "react";
import "./footer.css";
import facebook from "../../../assets/svgs/facebook.svg";
import twitter from "../../../assets/svgs/twitter.svg";
import linkedin from "../../../assets/svgs/linkedin.svg";
import youtube from "../../../assets/svgs/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">INHERITX</div>
      <div className="footer-links-section">
        <Link to={"/"} className="footer-links">
          Home
        </Link>
        <Link to={"/about"} className="footer-links">
          About Us
        </Link>
        <Link to={"/contact"} className="footer-links">
          Contact Us
        </Link>
      </div>

      <div className="footer-lower-section">
        <img className="footer-image" src={facebook} alt="facebook" />
        <a href="https://wwww.linkedin.com/luckyriteshmalviya">
          <img className="footer-image" src={linkedin} alt="linkedin" />
        </a>
        <img className="footer-image" src={twitter} alt="twitter" />
        <img className="footer-image" src={youtube} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
