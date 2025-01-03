import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../content/StoreContext';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartId = location.state?.cartId;
  const initialItems = location.state?.ingredients || [];
  const [cartDetails, setCartDetails] = useState(null);
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    location: '',
    orderDate: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const fetchCartDetails = async () => {
      if (cartId) {
        try {
          const response = await fetch(`http://localhost:4000/api/cart/find/${cartId}`);
          if (!response.ok) throw new Error('Failed to fetch cart details');
          const data = await response.json();
          setCartDetails(data.cart);
        } catch (error) {
          console.error('Error fetching cart details:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchCartDetails();
  }, [cartId]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleBack = () => {
    navigate('/order', { state: { ingredients: items.ingredients } });
  };

  const handleCancelCart = async () => {
    try {
      await fetch('http://localhost:4000/api/cart/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId }),
      });
      alert('Cart canceled successfully');
      navigate('/');
    } catch (error) {
      console.error('Error canceling cart:', error);
      alert('Failed to cancel cart.');
    }
  };

  if (loading) {
    return <p>Loading cart...</p>;
  }

  if (!cartDetails) {
    return <p>Cart not found. Please try again.</p>;
  }

  const handleCheckout = async () => {
    const { name, phone, location } = customerDetails;

    if (!name || !phone || !location) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/order/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartId,
          customerDetails: { name, phone, location },
          total: cartDetails.totalPrice + 10000,
          orderDate: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Failed to create order');
      alert('Order created successfully');
      const data = await response.json();
      const currentDate = new Date();
      const deliveryDate = new Date();
      deliveryDate.setDate(currentDate.getDate() + 3);
      navigate("/checkout", {
        state: {
          name,
          deliveryDate: deliveryDate.toDateString(),
        },
      });

    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order.');
    }
  };

  const deliveryFee = 10000;
  const subtotal = cartDetails.totalPrice;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <button className="back-btn" onClick={handleBack}>
        &larr; Back
      </button>
      <div className="cart-summary">
        <div className="cart-summary-row">
          <p>Subtotal:</p>
          <p>{subtotal.toFixed(2)} VND</p>
        </div>
        <div className="cart-summary-row">
          <p>Delivery Fee:</p>
          <p>{deliveryFee.toFixed(2)} VND</p>
        </div>
        <div className="cart-summary-row total-row">
          <b>Total:</b>
          <b>{total.toFixed(2)} VND</b>
        </div>
      </div>
      <div className="customer-details">
        <h3>Customer Details</h3>
        <div className="customer-details-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="customer-details-field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="customer-details-field">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={customerDetails.location}
            onChange={handleInputChange}
            placeholder="Enter your location"
          />
        </div>
      </div>
      <div className="cart-actions">
        <button className="cancel-btn" onClick={handleCancelCart}>
          Cancel
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
