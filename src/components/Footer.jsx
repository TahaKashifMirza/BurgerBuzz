import React from 'react';
import '../CSS/Footer.css';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-main-container">
        {/* 1st Column - Logo */}
        <div className="footer-main-col">
          <img src="Images/Logo.png" alt="BurgerBuzz Logo" className="footer-main-logo" />
        </div>

        {/* 2nd Column - Useful Links */}
        <div className="footer-main-col">
          <h3 className="footer-main-heading">Useful Links:</h3>
          <ul className="footer-main-links">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="deals" smooth={true} duration={500}>Deals</Link></li>
            <li><Link to="analysis" smooth={true} duration={500}>Analysis</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>

        {/* 3rd Column - Follow Us */}
        <div className="footer-main-col">
          <h3 className="footer-main-heading">Follow BurgerBuzz:</h3>
          <div className="footer-main-socials">
            <FaInstagram className="footer-main-icon" />
            <FaFacebook className="footer-main-icon" />
            <FaTwitter className="footer-main-icon" />
          </div>
        </div>
      </div>

      {/* Cross Line */}
      <hr className="footer-main-line" />

      {/* Copyright */}
      <div className="footer-main-copyright">
        © Copyright 2024 | <span className="footer-main-highlight">BurgerBuzz</span> All Right Reserved
      </div>
    </footer>
  );
};