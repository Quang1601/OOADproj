import './Order.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState(
    location.state?.ingredients || JSON.parse(localStorage.getItem('orderIngredients')) || []
  );
  const [cartCreated, setCartCreated] = useState(false);

  useEffect(() => {
    if (ingredients.length > 0) {
      localStorage.setItem('orderIngredients', JSON.stringify(ingredients));
    }
  }, [ingredients]);

  useEffect(() => {
    if (ingredients.length === 0) {
      alert('No ingredients to order. Redirecting...');
      navigate('/'); 
    }
  }, [ingredients, navigate]);

  useEffect(() => {
    if (ingredients.length > 0) {
      localStorage.setItem('orderIngredients', JSON.stringify(ingredients));
      console.log(localStorage)
    }
  }, []);

  useEffect(() => {
    if (ingredients.length === 0) {
      alert('No ingredients to order. Redirecting...');
      navigate('/'); 
    }
  }, [ingredients, navigate]);

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
  function calculateTotalPrice() {
    totalPrice = 0 ;
    ingredients.forEach(function (ingredient) {
      totalPrice += ingredient.ingredientId.price * (ingredient.quantity / ingredient.ingredientId.quantity);
    });

    return totalPrice;
  }

  function handleIncreaseIngredient(id) {
    setIngredients(ingredients.map(i => ({...i, quantity: i.ingredientId._id === id? i.quantity*2 : i.quantity})))
  }

  function handleDecreaseIngredient(id) {
    setIngredients(ingredients.map(i => ({...i, quantity: i.ingredientId._id === id? i.quantity/2 : i.quantity})))
  }

  function handleIngredientChange(id) {
    setIngredients(ingredients.map(i => ({...i, quantity: i.ingredientId._id === id?
                                         document.getElementById(`${i.ingredientId._id}_input`).value : i.quantity})))
  }

  return (
    <div className="order-page">
      <h1>Order Ingredients</h1>
      
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.ingredientId._id}>
              <p>
                {ingredient.ingredientId.name}: {ingredient.quantity} {ingredient.ingredientId.unit}
              </p>
              <p>
                Price:{" "}
                {(
                  (ingredient.quantity / ingredient.ingredientId.quantity) *
                  ingredient.ingredientId.price
                ).toFixed(2)}{" "}
                VND
                <button onClick={()=> handleIncreaseIngredient(ingredient.ingredientId._id)}>Increase</button> 
                <button onClick={()=> handleDecreaseIngredient(ingredient.ingredientId._id)}>Decrease</button>
                <input id={`${ingredient.ingredientId._id}_input`}
                       type="number" 
                       onChange={()=>handleIngredientChange(ingredient.ingredientId._id)} />
              </p>
            </li>
          ))}
          <hr />
        </ul>
      ) : (
        <p>No ingredients available to order.</p>
      )}
      <h3>Total: {calculateTotalPrice().toFixed(2)} VND</h3>
      <button
        className="order-btn"
        onClick={() => {
          handleAddToCart();
        }}
        disabled={cartCreated}
      >
        {cartCreated ? "Cart Created" : "Add All to Cart"}
      </button>
    </div>
  );
};

export default Order;
