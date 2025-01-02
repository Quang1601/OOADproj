import './Order.css';
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../content/StoreContext';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addIngredientToCart } = useContext(StoreContext);
  const ingredients = location.state.ingredients || [];
  const [cartCreated, setCartCreated] = useState(false);

  const handleAddToCart = async () => {
    ingredients.forEach(ingredient => {
      addIngredientToCart({
        ingredientId: ingredient.ingredientId,
        quantity: ingredient.quantity,
      });
    });
    setCartCreated(true);
    navigate('/cart', { state: { ingredients } });
  };

  let totalPrice = 0;

  function calculateTotalPrice() {
    ingredients.forEach(function (ingredient) {
      totalPrice += ingredient.ingredientId.price * (ingredient.quantity / ingredient.ingredientId.quantity);
    });
    return totalPrice;
  }

  return (
    <div className="order-page">
      <h1>Order Ingredients</h1>
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              <p>{ingredient.ingredientId.name}: {ingredient.quantity} {ingredient.ingredientId.unit}</p>
              <p>Price: {(ingredient.quantity / ingredient.ingredientId.quantity * ingredient.ingredientId.price).toFixed(2)} VND</p>
            </li>
          ))}
          <hr />
        </ul>
      ) : (
        <p>No ingredients available to order.</p>
      )}
      <h3>Total: {calculateTotalPrice().toFixed(2)} VND</h3>
      <button className="order-btn" onClick={handleAddToCart} disabled={cartCreated}>
        {cartCreated ? 'Cart Created' : 'Add All to Cart'}
      </button>
    </div>
  );
};

export default Order;