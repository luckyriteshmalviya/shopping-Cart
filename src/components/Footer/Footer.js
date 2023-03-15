import React from "react";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import youtube from "../../assets/svgs/youtube.svg";

const Footer = () => {
  

  return (
    <div className="footer-container">
      
      {/* <div className="footer-links-section"> */}
         {/* <Link to={"/about"} className="footer-links" >
          About Us
        </Link> <Link to={"/contact"} className="footer-links" >
          Contact Us
        </Link>
      
      </div> */}

      footer

      <div className="footer-lower-section">
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
    </div>
  );
};

export default Footer;
