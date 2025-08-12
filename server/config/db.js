// filepath: c:\Users\Asus\Desktop\New folder\server\config\db.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;