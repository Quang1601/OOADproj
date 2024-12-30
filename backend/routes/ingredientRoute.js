import express from "express"
import { addIngredient,getAllIngredients,updateIngredient,deleteIngredient,addIngredientsFromList } from "../controllers/ingredientController.js";
import multer from "multer"


const ingredientRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}` )
    }
})

export const upload = multer({storage:storage});

ingredientRouter.post("/add",upload.single("image"),addIngredient);
ingredientRouter.post("/add-many", addIngredientsFromList);
ingredientRouter.get("/list", getAllIngredients);
ingredientRouter.put("/update/:ingredientId", upload.single("image"), updateIngredient);
ingredientRouter.delete("/delete/:ingredientId", deleteIngredient);


export default ingredientRouter;