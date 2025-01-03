import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OrderDetails.css';

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/order/${orderId}`);
        if (!response.ok) throw new Error('Failed to fetch order details');
        const data = await response.json();
        setOrderDetails(data.order);
      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (!orderDetails) {
    console.log(orderId);
    return <p>Order not found.</p>;
  }

  return (
    <div className="order-details">
      <h1>Order Details</h1>
      <p><strong>Order ID:</strong> {orderDetails._id}</p>
      <p><strong>Total Price:</strong> {orderDetails.totalPrice} VND</p>
      <h3>Items:</h3>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.ingredientId.name} - {item.quantity} {item.ingredientId.unit}
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Dashboard</button>
    </div>
  );
};

export default OrderDetails;
