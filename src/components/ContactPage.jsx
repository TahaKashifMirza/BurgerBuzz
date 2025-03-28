import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../CSS/ContactPage.css';

export const ContactPage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  
  // Array of background images (URLs can be updated)
  const backgrounds = [
    'url("/path-to-image1.jpg")',
    'url("/path-to-image2.jpg")',
    'url("/path-to-image3.jpg")',
  ];

  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.1,
    });

    if (leftElement) observer.observe(leftElement);
    if (rightElement) observer.observe(rightElement);

    return () => {
      if (leftElement) observer.unobserve(leftElement);
      if (rightElement) observer.unobserve(rightElement);
    };
  }, []);

  // Image background change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="contact-container" 
      style={{ backgroundImage: backgrounds[backgroundIndex], transition: 'background-image 0.5s ease-in-out' }}
    >
      <h1 className="contact-main-heading">Contact With BurgerBuzz</h1>
      <h2 className="contact-sub-heading">We are here for you!</h2>
      <div className="contact-content">
        {/* Left Side - Contact Form */}
        <div className="contact-left slide-left" ref={leftRef}>
          <h3 className="contact-form-heading">Get in Touch:</h3>
          <div className="contact-form-group">
            <input type="text" placeholder="Name" className="contact-input contact-input-name" />
            <input type="email" placeholder="Email" className="contact-input contact-input-email" />
          </div>
          <textarea placeholder="Message" className="contact-input contact-input-message" rows="5"></textarea>
          <button className="contact-btn"><strong>SEND</strong></button>
        </div>

        {/* Right Side - Contact Information */}
        <div className="contact-right slide-right" ref={rightRef}>
          <div className="contact-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <span>123 Burger Street, Food City, USA</span>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
            <span>+1 234 567 890</span>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>burgerbuzzmanagement@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
