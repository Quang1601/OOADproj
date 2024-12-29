import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "cart", required: true },
  status: { type: String, enum: ["Pending", "Processing", "Completed", "Cancelled"], default: "Pending" },
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  customerDetails: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
