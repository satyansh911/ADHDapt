import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    const opts = {
      bufferCommands: false,
    };
    await mongoose.connect(MONGODB_URI!, opts);
  }
  return mongoose;
}

export default connectToDatabase;
