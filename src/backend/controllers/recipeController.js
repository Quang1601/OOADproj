import recipeModel from "../models/recipeModel.js";

export const getRecipeIngredients = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const recipe = await recipeModel.findById(recipeId).populate("ingredients.ingredientId");
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const ingredientList = recipe.ingredients.map((ing) => ({
      name: ing.ingredientId.name,
      quantity: ing.quantity,
      unit: ing.ingredientId.unit,
      price: ing.ingredientId.price,
      totalCost: ing.ingredientId.price * ing.quantity,
    }));

    res.status(200).json({ recipe: recipe.name, ingredients: ingredientList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
