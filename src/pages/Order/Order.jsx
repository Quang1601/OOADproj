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
          {ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              {ingredient.ingredientId.name}: {ingredient.quantity}
              {ingredient.ingredientId.unit}
              <br />
              Price:{" "}
              {(
                (ingredient.quantity / ingredient.ingredientId.quantity) *
                ingredient.ingredientId.price
              ).toFixed(2)}{" "}
              VND
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients available to order.</p>
      )}
      <h3>Total: {calculateTotalPrice().toFixed(2)} VND</h3>
      <button className="order-btn" onClick={handleAddToCart}>
        Add All to Cart
      </button>
    </div>
  );
};

export default Order;
