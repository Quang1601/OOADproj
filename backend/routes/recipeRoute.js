import express from 'express';
import {addRecipe, getRecipesByRegionAndCategory, updateRecipe, deleteRecipe,deleteAllRecipes,} from "../controllers/recipeController.js";
import multer from "multer"

const router = express.Router();
const upload = multer();

router.post("/add", upload.none(), addRecipe);


router.get("/find/:region/:category", getRecipesByRegionAndCategory);


router.put("/update/:recipeId", updateRecipe);

router.delete("/delete/:recipeId", deleteRecipe);


router.delete("/delete-all", deleteAllRecipes);

export default router;
