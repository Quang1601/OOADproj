import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://helicopter:Nhan123@cluster0.gxpzb.mongodb.net/OOAD_project?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}