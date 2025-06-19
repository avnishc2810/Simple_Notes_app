import express from "express"
import notesRoute from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import { rateLimiter } from "./middleware/ratelimiter.js"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use(express.json()) // Middleware to parse JSON bodies
app.use(rateLimiter)
app.use(cors({
    origin:"http://localhost:5173", // Replace with your frontend URL
})) // Enable CORS for all routes

app.use("/api/notes",notesRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

