import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import ingredientRouter from "./routes/ingredientRoute.js"
import recipeRouter from "./routes/recipeRoute.js";
import path from "path";

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

app.use("/api/ingredient",ingredientRouter)
app.use("/api/recipe", recipeRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

