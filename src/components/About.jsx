import React, { useState, useEffect } from "react";
import "../CSS/About.css"; // Importing styles

export const About = () => {
  const [mainImage, setMainImage] = useState("/Images/H1.jpeg");
  const [subImage1, setSubImage1] = useState("/Images/H2.jpeg");
  const [subImage2, setSubImage2] = useState("/Images/H3.jpeg");
  const [subImage3, setSubImage3] = useState("/Images/H1.jpeg");

  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const imageShuffle = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setMainImage((prev) =>
          prev === "/Images/H1.jpeg" ? subImage1 : subImage2
        );
        setSubImage1((prev) =>
          prev === "/Images/H2.jpeg" ? subImage2 : subImage3
        );
        setSubImage2((prev) =>
          prev === "/Images/H3.jpeg" ? subImage3 : mainImage
        );
        setSubImage3((prev) =>
          prev === "/Images/H1.jpeg" ? mainImage : subImage1
        );

        setFadeIn(true);
      }, 500);
    }, 4000);

    return () => clearInterval(imageShuffle);
  }, [mainImage, subImage1, subImage2, subImage3]);

  return (
    <div className="about-container">
      <div className="about-left">
        <div className={`main-image ${fadeIn ? "fade-in" : "fade-out"}`}>
          <img src={mainImage} alt="Main Burger Image" />
        </div>
        <div className="sub-images">
          <img
            src={subImage1}
            alt="Sub Image 1"
            className={fadeIn ? "fade-in" : "fade-out"}
          />
          <img
            src={subImage2}
            alt="Sub Image 2"
            className={fadeIn ? "fade-in" : "fade-out"}
          />
          <img
            src={subImage3}
            alt="Sub Image 3"
            className={fadeIn ? "fade-in" : "fade-out"}
          />
        </div>
      </div>

      <div className="about-right">
        <h1>ABOUT BurgerBuzz</h1>
        <h2>Where Every Bite Blooms with Flavor</h2>
        <p>
          BurgerBuzz is a gourmet burger restaurant where every bite is crafted
          to perfection. Our chefs use the freshest ingredients to create a
          dining experience that’s flavorful, satisfying, and unforgettable.
          Whether you're craving a classic cheeseburger or something more
          adventurous, BurgerBuzz offers a wide variety of options that cater to
          every palate. From the succulent patties to the perfect blend of
          toppings, we make sure that every burger is a masterpiece. Join us at
          BurgerBuzz, where quality and flavor meet for the ultimate burger
          experience.
        </p>
      </div>
    </div>
  );
};
