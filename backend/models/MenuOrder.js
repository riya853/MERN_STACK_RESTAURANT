import mongoose from "mongoose";

const MenuOrderSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalPrice: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

// Export default (ESM)
export default mongoose.model("MenuOrder", MenuOrderSchema);
