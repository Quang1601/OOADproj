import cartModel from "../models/cartModel.js";

export const addCart = async (req, res) => {
  const { items, totalPrice } = req.body;

  try {
    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Cart cannot be empty" });
    }

    if (totalPrice == null || totalPrice < 0) {
      return res.status(400).json({ error: "Invalid total price" });
    }

    const newCart = new cartModel({
      items,
      totalPrice,
    });

    await newCart.save();
    res.status(201).json({ message: "Cart created successfully", cart: newCart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeCart = async (req, res) => {
  const { cartId } = req.body;

  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    await cart.remove();
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
