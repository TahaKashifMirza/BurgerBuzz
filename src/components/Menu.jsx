import React, { useEffect } from 'react';
import '../CSS/Menu.css'; // Import the updated CSS file for animations

export const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Classic Cheeseburger', description: 'Juicy beef patty, cheddar cheese, lettuce', price: '$9.99', image: '/Images/H1.jpeg' },
    { id: 2, name: 'BBQ Bacon Burger', description: 'Crispy bacon, BBQ sauce, onion rings', price: '$11.99', image: '/Images/H1.jpeg' },
    { id: 3, name: 'Spicy Chicken Burger', description: 'Grilled chicken, spicy sauce, lettuce', price: '$10.99', image: '/Images/H1.jpeg' },
    { id: 4, name: 'Beefy Burgers', description: 'Sautéed mushrooms, Swiss cheese', price: '$12.99', image: '/Images/H1.jpeg' },
    { id: 5, name: 'Burger Bizz', description: 'Two beef patties, cheese, special sauce', price: '$14.99', image: '/Images/H1.jpeg' },
    { id: 6, name: 'Veggie Delight', description: 'Grilled veggie patty, avocado, sprouts', price: '$8.99', image: '/Images/H1.jpeg' },
    { id: 7, name: 'Smoky Chipotle', description: 'Chipotle sauce, jalapeños, smoked cheese', price: '$10.49', image: '/Images/H1.jpeg' },
    { id: 8, name: 'Delish Burger', description: 'Pineapple, ham, and teriyaki sauce', price: '$11.49', image: '/Images/H1.jpeg' }
  ];

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay the appearance of each item by 200ms for a smooth sequence
    });
  }, []);

  return (
    <div className="menu-page">
      <h1 className="menu-heading">BurgerBuzz MENU</h1>
      <h2 className="menu-subheading">BEST EVER BURGERS</h2>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-image-container">
              <img src={item.image} alt={item.name} className="menu-image" />
            </div>
            <div className="menu-content">
              <h3 className="menu-item-heading">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <span className="menu-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};