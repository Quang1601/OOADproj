import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state;

  if (!orderDetails) {
    return (
      <div className="thank-you">
        <h2>Order Confirmation</h2>
        <p>No order details available.</p>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const { name, deliveryDate } = orderDetails;

  return (
    <div className="thank-you">
      <h1>Thank You for Your Order!</h1>
      <p>
        Dear <b>{name}</b>, your order has been successfully placed.
      </p>
      <p>
        Your order will be delivered by <b>{deliveryDate}</b>.
      </p>
      <p>We hope you enjoy your purchase. Thank you for shopping with us!</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Checkout;
