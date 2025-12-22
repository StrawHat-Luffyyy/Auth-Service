import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(connection.connection.host);
    console.log("MongoDb connected !!!");
  } catch (error) {
    console.log("Failed to connect to the mongoose" , error);
    process.exit(1);
  }
};
