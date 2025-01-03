import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SupplierDashboard.css';

const SupplierDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/order/all');
        if (!response.ok) throw new Error('Failed to fetch orders');
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders available.</p>;
  }

  return (
    <div className="supplier-dashboard">
      <h1>Order Dashboard</h1>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order._id} className="order-item">
            <div>
              <strong>Order ID:</strong> {order._id}
            </div>
            <div>
              <strong>Total Price:</strong> {order.totalPrice} VND
            </div>
            <Link to={`/order/${order._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierDashboard;
