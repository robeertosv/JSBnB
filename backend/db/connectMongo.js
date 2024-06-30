import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("DB Connected!")
    }catch(e) {
        console.log(`Cannot connect with DB: ${e.message}`)
    }
}

export default connectDB;