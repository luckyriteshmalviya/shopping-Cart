import React from "react";
import './Footer.css'
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import youtube from "../../assets/svgs/youtube.svg";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
                <div className="footer-logo">
      INHERITX
      </div>
      <div className="footer-links-section">
         <Link to={"/about"} className="footer-links" >
          About Us
        </Link> <Link to={"/contact"} className="footer-links" >
          Contact Us
        </Link>

      </div>

      <div className="footer-lower-section">
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      </footer>

  );
};

export default Footer;
