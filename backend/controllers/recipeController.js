import recipeModel from "../models/recipeModel.js";
import { RecipeFactory } from "../factories/RecipeFactory.js";

export const addRecipe = async (req, res) => {
  const { name, category, region } = req.body;

  try {
    const ingredients = JSON.parse(req.body.ingredients);
    const recipe = RecipeFactory.createRecipe(region, category, name);
    if (!name || !category || !region || !ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ error: "Missing or invalid fields in the request." });
    }

    if (ingredients) {
      ingredients.forEach(ing => recipe.addIngredient(ing.ingredientId, ing.quantity));
    }

    const newRecipe = new recipeModel({
      name: recipe.name,
      category: recipe.category,
      region: recipe.region,
      ingredients: recipe.ingredients,
    });

    await newRecipe.save();

    res.status(201).json({ message: "Recipe added successfully!", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await recipeModel.findById(id).populate("ingredients.ingredientId");
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getRecipesByRegionAndCategory = async (req, res) => {
  const { region, category } = req.params;

  try {
    const recipes = await recipeModel.find({ region, category });
    if (!recipes.length) {
      return res.status(404).json({ error: "No recipes found for the given region and category." });
    }

    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const { name, category, region, ingredients } = req.body;

  try {
    const updatedRecipe = await recipeModel.findByIdAndUpdate(
      recipeId,
      { name, category, region, ingredients },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    res.status(200).json({ message: "Recipe updated successfully!", recipe: updatedRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const deletedRecipe = await recipeModel.findByIdAndDelete(recipeId);
    
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    res.status(200).json({ message: "Recipe deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAllRecipes = async (req, res) => {
  try {
    const deletedRecipes = await recipeModel.deleteMany({});
    
    if (deletedRecipes.deletedCount === 0) {
      return res.status(404).json({ error: "No recipes found to delete." });
    }

    res.status(200).json({ message: "All recipes deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const calculateRecipePrice = async (recipeId) => {
  try {
    const recipe = await recipeModel.findById(recipeId).populate("_id");

    if (!recipe) {
      throw new Error("Recipe not found.");
    }

    let totalPrice = 0;

    recipe.ingredients.forEach((ingredient) => {
      const ingredientPricePerUnit = ingredient.ingredientId.price;
      const ingredientQuantity = ingredient.quantity;
      totalPrice += ingredientPricePerUnit * ingredientQuantity;
    });
    return totalPrice;
  } catch (error) {
    throw new Error(error.message);
  }
};
