import orderModel from "../models/orderModel.js";
import cartModel from "../models/cartModel.js";

export const createOrder = async (req, res) => {
  const { cartId, customerDetails, orderDate } = req.body;

  if (!cartId || !customerDetails) {
    return res.status(400).json({ error: "cartId and customerDetails are required" });
  }

  const { name, location, phone } = customerDetails;
  if (!name || !location || !phone) {
    return res.status(400).json({ error: "Customer details are incomplete" });
  }

  try {
    const cart = await cartModel.findById(cartId);
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty or does not exist" });
    }

    const newOrder = new orderModel({
      cartId,
      totalPrice: cart.totalPrice,
      customerDetails,
      orderDate: orderDate || new Date(), 
    });

    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    await order.remove();
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
