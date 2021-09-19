import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_DB);

export default mongoose;
