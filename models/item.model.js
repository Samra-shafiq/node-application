// models/item.model.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Item", itemSchema);
