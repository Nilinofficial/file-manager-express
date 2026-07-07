import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!!)
        console.log("Mongo db connected");
        
    } catch (err) {
        console.log("Mongo DB connection failed!", err);
        process.exit(1);

    }
}
export default connectDB