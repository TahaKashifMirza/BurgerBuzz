import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../CSS/HeroSlider.css';

const images = [
  {
    src: '/Images/H4.jpg',
    heading: 'Welcome to BurgerBuzz',
    text: 'Where Every Bite Blooms With Flavour',
  },
  {
    src: '/Images/H5.jpg',
    heading: 'Savor The Flavour',
    text: 'Indulge In Our Juicy Burgers, Crafted With Love',
  },
  {
    src: '/Images/H6.jpg',
    heading: 'Burger Love Guaranteed',
    text: 'Experience The Perfect Blend Of Taste',
  },
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Text animation
  const textEnterAnimation = useSpring({
    opacity: isTextVisible ? 1 : 0,
    transform: isTextVisible ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 120, friction: 40 },
  });

  const textExitAnimation = useSpring({
    opacity: isTextVisible ? 1 : 0,
    transform: isTextVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 120, friction: 40 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => {
          setIsTextVisible(true);
        }, 500);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div className="overlay" />
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {index === currentIndex && (
            <animated.div
              style={isTextVisible ? textEnterAnimation : textExitAnimation}
              className="text-content"
            >
              <h1>{image.heading}</h1>
              <p>{image.text}</p>
            </animated.div>
          )}
        </div>
      ))}
      <div className="nav-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
