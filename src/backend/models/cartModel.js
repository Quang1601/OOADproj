import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  ingredientId: { type: mongoose.Schema.Types.ObjectId, ref: "ingredient", required: true },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 },
});

const cartModel = mongoose.models.cart || mongoose.model("cart", cartSchema);

export default cartModel;
