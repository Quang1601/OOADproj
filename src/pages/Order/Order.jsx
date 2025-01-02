import './Order.css';
import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ingredients = location.state.ingredients || [];
  const [cartCreated, setCartCreated] = useState(false);
  
  const handleAddToCart = async () => {
    const items = ingredients.map(ingredient => ({
      ingredientId: ingredient.ingredientId._id,
      quantity: ingredient.quantity,
    }));
    const totalPrice = calculateTotalPrice();
    try {
      const response = await fetch('http://localhost:4000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, totalPrice }),
      });

      if (!response.ok) {
        throw new Error('Failed to add items to cart');
      }

      const result = await response.json();
      setCartCreated(true);
      navigate('/cart', { state: { cartId: result.cart._id } });
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
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
              <p>{ingredient.ingredientId.name}: {ingredient.quantity}  {ingredient.ingredientId.unit}</p>
           
              
              <p>Price:{" "}
              {(
                (ingredient.quantity / ingredient.ingredientId.quantity) *
                ingredient.ingredientId.price
              ).toFixed(2)}{" "}
              VND </p>
            </li>
            
          ))}
          <hr/>
        </ul>
      ) : (
        <p>No ingredients available to order.</p>
      )}
      <h3>Total: {calculateTotalPrice().toFixed(2)} VND</h3>
      <button className="order-btn" onClick={() => {
              handleAddToCart(); 
            }}
            disabled={cartCreated}>
        {cartCreated ? 'Cart Created' : 'Add All to Cart'}
      </button>
    </div>
  );
};

export default Order;
