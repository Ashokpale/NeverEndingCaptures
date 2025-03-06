import React from "react";
import "./Footer.css"; // Ensure this file exists
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Never Ending Captures. All Rights Reserved.</p>
        
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
