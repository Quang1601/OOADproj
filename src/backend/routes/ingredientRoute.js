import express from "express"
import { addIngredient,getAllIngredients,updateIngredient,deleteIngredient } from "../controllers/ingredientController.js";
import multer from "multer"


const ingredientRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null, '${Date.now()}${file.originalname}' )
    }
})

export const upload = multer({storage:storage});

ingredientRouter.post("/add",upload.single("image"),addIngredient)
ingredientRouter.delete("/delete/:ingredientId", deleteIngredient);


export default ingredientRouter;