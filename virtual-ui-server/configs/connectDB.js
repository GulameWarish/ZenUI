
import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl) {
    throw new Error(
      "MONGODB_URL is missing. Check Vercel Environment Variables."
    );
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
