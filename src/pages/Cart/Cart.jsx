import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../content/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, food_list, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/order', { state: { ingredients: cartItems } }); 
  };

  const handleCancelCart = async () => {
    try {
      await fetch('http://localhost:4000/api/cart/remove', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      clearCart();
      alert('Cart canceled successfully');
      navigate('/order');
    } catch (error) {
      console.error('Error canceling cart:', error);
      alert('Failed to cancel cart.');
    }
  };

  return (
    <div className="cart">
      <button className="back-btn" onClick={handleBack}>
        &larr; Back
      </button>
      <div className="cart-summary">
        <div className="cart-summary-row">
          <p>Subtotal:</p>
          <p>{0} VND</p>
        </div>
        <div className="cart-summary-row">
          <p>Delivery Fee:</p>
          <p>{2} VND</p>
        </div>
        <div className="cart-summary-row total-row">
          <b>Total:</b>
          <b>{2} VND</b>
        </div>
      </div>
      <div className="customer-details">
        <h3>Customer Details</h3>
        <div className="customer-details-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="customer-details-field">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="customer-details-field">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" placeholder="Enter your location" />
        </div>
      </div>
      <div className="cart-actions">
        <button className="cancel-btn" onClick={handleCancelCart}>
          Cancel
        </button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;