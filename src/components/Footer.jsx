import React from "react";
import instagram from "./assets/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/"
        className="instagram-button"
        data-show-count="false"
      >
        <img src={instagram} alt="logo" className="logo" />
      </a>

      <a href="mailto:cooldrinks64@gmail.com" className="mail-footer">
        cooldrinks64@gmail.com
      </a>
      <p className="text-footer">06.71.71.71.71</p>
    </div>
  );
};

export default Footer;
