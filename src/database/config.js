import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://abhishekdass14151617_db_user:YW191iueCTp3NgbB@cluster0.p0f15ru.mongodb.net/hometown?retryWrites=true&w=majority&appName=Cluster0";

const Connection = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, {
        // no need for useUnifiedTopology anymore
        useNewUrlParser: true,
      });
      console.log("✅ Database connected successfully");
    }
  } catch (error) {
    console.error("❌ Error while connecting with the database:", error.message);
  }
};

export default Connection;
