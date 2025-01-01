import React from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const ingredients = location.state.ingredients;

  
  const handleAddToCart = (ingredient) => {
    console.log(`${ingredient} added to cart!`);
  };
  
  let totalPrice = 0;
  let ingredientPricePerUnit;
  let ingredientQuantity;
  
  function calculateTotalPrice(){

    ingredients.forEach(function(ingredient) {
    totalPrice += ingredient.ingredientId.price * (ingredient.quantity/ingredient.ingredientId.quantity);
    })

    return totalPrice;
  }
  return (
    <div className="order-page">
      <h1>Order Ingredients</h1>
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient._id}`}>
              {ingredient.ingredientId.name}: {ingredient.quantity}{ingredient.ingredientId.unit}
              <br />
              Price: {ingredient.quantity/ingredient.ingredientId.quantity*ingredient.ingredientId.price}VND
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
      <h3>Total: {calculateTotalPrice()}VND</h3>
      
    </div>
  );
};

export default Order;