import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import ingredientRouter from "./routes/ingredientRoute.js"
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

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log('Server started on http://localhost:${port}');
})

const __dirname = path.resolve();
app.use("/assets", express.static(path.join(__dirname, "assets")));