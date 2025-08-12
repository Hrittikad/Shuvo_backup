import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
app.use(cors());

// Connect to DB after dotenv loads
connectDB();

app.get('/', (req, res) => res.send("API is working FINE! Hriti I love You"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));