import './about.css'
import React from "react";
import { MidSizeButton } from "../../Components/Buttons/Button";

function About() {
  return (
    <div className="about-container">
      <h4>About Us</h4>
      <h1>Ritesh Malviya</h1>
      <a
        className="about-us-link"
        href="https://www.linkedin.com/in/ritesh-malviya/"
      >
        <MidSizeButton text="link" />
      </a>
    </div>
  );
}

export default About;
