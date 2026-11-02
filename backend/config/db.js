import mongoose from "mongoose"

const mongodbUri = process.env.MONGO_DB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("Error Connecting Mongo db", error)
    }
}

export default connectDB