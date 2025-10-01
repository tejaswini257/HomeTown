import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true, required: true },
    items: [
      {
        productId: { type: Number, required: true },
        category: { type: String, required: true },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Wishlist || mongoose.model("Wishlist", WishlistSchema);


