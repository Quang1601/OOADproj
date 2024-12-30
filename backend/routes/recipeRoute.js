import express from 'express';
import {addRecipe, getRecipesByRegionAndCategory, updateRecipe, deleteRecipe,deleteAllRecipes,} from "../controllers/recipeController.js";

const router = express.Router();


router.post("/add", addRecipe);


router.get("/find/:region/:category", getRecipesByRegionAndCategory);


router.put("/update/:recipeId", updateRecipe);

router.delete("/delete/:recipeId", deleteRecipe);


router.delete("/delete-all", deleteAllRecipes);

export default router;
