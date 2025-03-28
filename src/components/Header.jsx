import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../CSS/Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'deals', 'analysis', 'testimonials', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100 && window.scrollY < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="headercontainer">
        <div className="header__logo">
          <Link to="home" smooth={true} duration={500} onClick={() => { toggleMenu(); handleSetActive('home'); }}>
            <img src={'/Images/Logo.png'} alt="BurgerBuzz Logo" />
          </Link>
        </div>
        <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
          <ul>
            {['home', 'menu', 'about', 'deals', 'analysis', 'testimonials', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust this value based on your header height
                  onClick={() => { toggleMenu(); handleSetActive(section); }}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
