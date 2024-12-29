import cartModel from "../models/cartModel.js";
import CartFactory from "../factories/CartFactor.js";

export const addToCart = async (req, res) => {
  const { cartId, ingredientId, quantity } = req.body;

  try {
    let cart = await cartModel.findById(cartId);
    if (!cart) {
      cart = new cartModel({ items: [] });
    }

    await CartFactory.createOrUpdateItem(cart, ingredientId, quantity);

    await cart.save();
    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
