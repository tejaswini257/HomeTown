import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    discount: { type: Number },
    material: { type: String },
    color: { type: String },
    style: { type: String },
    seats: { type: Number },
    size: { type: String },
    pieces: { type: Number },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    image1: { type: String },
    image2: { type: String },
    category: { type: String, index: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);


