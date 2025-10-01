const mongoose = require("mongoose");
const { allProducts } = require("../src/app/data/products.js");

const MONGODB_URI = "mongodb+srv://abhishekdass14151617_db_user:YW191iueCTp3NgbB@cluster0.p0f15ru.mongodb.net/hometown?retryWrites=true&w=majority&appName=Cluster0";

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

const Product = mongoose.model("Product", ProductSchema);

async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️ Cleared existing products");

    // Flatten all products from all categories
    const allProductsArray = [];
    Object.keys(allProducts).forEach(category => {
      allProducts[category].forEach(product => {
        allProductsArray.push(product);
      });
    });

    // Insert all products
    await Product.insertMany(allProductsArray);
    console.log(`✅ Seeded ${allProductsArray.length} products`);

    // Show some stats
    const categories = await Product.distinct("category");
    console.log("📊 Categories:", categories);
    
    const countByCategory = {};
    for (const category of categories) {
      countByCategory[category] = await Product.countDocuments({ category });
    }
    console.log("📈 Products per category:", countByCategory);

  } catch (error) {
    console.error("❌ Error seeding products:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

seedProducts();
