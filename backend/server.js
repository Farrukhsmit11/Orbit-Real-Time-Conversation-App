import express from "express"
import cors from "cors"
import "dotenv/config";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();
const PORT = 5002

app.use(express.json())

app.use(authRoutes)

app.use(cors({
    origin: "http://localhost:5173"
}))

connectDB();


app.get("/", (req, res) => {
    res.send("Hello World backend working")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})