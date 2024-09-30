import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Enable the query logs
    // mongoose.set('debug', true);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.log("error===============", err);

    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
