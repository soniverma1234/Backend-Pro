import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
    throw error;
  }
};

export default connectDB;