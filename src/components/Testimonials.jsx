import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import '../CSS/Testimonials.css';

const testimonialsData = [
  {
    name: 'David Smith',
    image: '/Images/T1.PNG',
    rating: 4.5,
    message: 'BurgerBuzz burgers are the best! Juicy, fresh, and incredibly delicious!',
  },
  {
    name: 'Michael Johnson',
    image: '/Images/T2.PNG',
    rating: 4,
    message: 'I love BurgerBuzz! The flavors are amazing, and their service is top-notch!',
  },
  {
    name: 'James Williams',
    image: '/Images/T3.PNG',
    rating: 5,
    message: 'Fantastic experience! The burgers were out of this world!',
  },
  {
    name: 'Emily Davis',
    image: '/Images/T4.PNG',
    rating: 5,
    message: 'Dive into deliciousness at BurgerBuzz, where every burger is a masterpiece!',
  },
  {
    name: 'Sophia Brown',
    image: '/Images/T5.PNG',
    rating: 5,
    message: 'Taste the difference at BurgerBuzz—our passion for quality shines in every meal!',
  },
  {
    name: 'Olivia Jones',
    image: '/Images/T6.PNG',
    rating: 5,
    message: 'BurgerBuzz: Crafting mouthwatering burgers that keep you coming back for more!',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);
  const testimonialsRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (event) => {
    startXRef.current = event.clientX; // Store the starting X position
    isDraggingRef.current = true; // Set dragging state to true
  };

  const handleMouseMove = (event) => {
    if (!isDraggingRef.current) return;

    const deltaX = event.clientX - startXRef.current;

    if (deltaX > 50) {
      prevTestimonial(); // Dragged right
      isDraggingRef.current = false; // Stop dragging
    } else if (deltaX < -50) {
      nextTestimonial(); // Dragged left
      isDraggingRef.current = false; // Stop dragging
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false; // Stop dragging
  };

  return (
    <section
      className="testimonials-section"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the area
    >
      <h2 className="testimonials-main-heading">BurgerBuzz HAPPY CUSTOMERS</h2>
      <p className="testimonials-paragraph"><strong>Where Every Bite Blooms with Flavor</strong></p>
      <div className="testimonials-slider" ref={testimonialsRef}>
        {testimonialsData.map((testimonial, index) => (
          <div
            className={`testimonials-container ${
              index === currentIndex ? (isEntering ? 'active' : 'hidden') : (index === (currentIndex + 1) % testimonialsData.length ? 'enter' : 'hidden')
            }`}
            key={index}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonials-image"
            />
            <h3 className="testimonials-name">{testimonial.name}</h3>
            <div className="testimonials-rating">
              {[...Array(5)].map((star, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(testimonial.rating) ? '#ffc107' : '#e4e5e9'}
                  size={20}
                />
              ))}
            </div>
            <p className="testimonials-message">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
