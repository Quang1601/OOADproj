import React from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const ingredients = location.state?.ingredients || [];

  const handleAddToCart = (ingredient) => {
    console.log(`${ingredient} added to cart!`);
  };

  return (
    <div className="order-page">
      <h1>Order Ingredients</h1>
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
              <button
                className="order-btn"
                onClick={() => handleAddToCart(ingredient)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients available to order.</p>
      )}
    </div>
  );
};

export default Order;
