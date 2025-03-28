import React from 'react';
import '../CSS/Deals.css'; // Create a Deals.css file for styling

export const Deals = () => {
  const deals = [
    {
      id: 1,
      heading1: 'BurgerBuzz Deal #1',
      heading2: 'Combo Deal',
      description: '2 Burgers and 3 Cold Drinks',
      price: '$20/= Only',
    },
    {
      id: 2,
      heading1: 'BurgerBuzz Deal #2',
      heading2: 'Family Combo',
      description: '4 Burgers and 5 Cold Drinks',
      price: '$40/= Only',
    },
    {
      id: 3,
      heading1: 'BurgerBuzz Deal #3',
      heading2: 'Party Combo',
      description: '6 Burgers and 6 Cold Drinks',
      price: '$60/= Only',
    },
    {
      id: 4,
      heading1: 'BurgerBuzz Deal #4',
      heading2: 'Super Saver Combo',
      description: '8 Burgers and 10 Cold Drinks',
      price: '$80/= Only',
    },
  ];

  return (
    <div className="deals-container">
      {deals.map((deal) => (
        <div key={deal.id} className="deal-item">
          <div className="deal-content">
            <h1>{deal.heading1}</h1>
            <h2>{deal.heading2}</h2>
            <p>{deal.description}</p>
            <h3>{deal.price}</h3>
          </div>
          <button className="order-btn">Order Now</button>
        </div>
      ))}
    </div>
  );
};