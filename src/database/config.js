import mongoose from "mongoose";

const Connection = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
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
