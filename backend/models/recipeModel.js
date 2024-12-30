import mongoose from "mongoose";

const ingredientRecipeSchema = new mongoose.Schema({
  ingredientId: { type: mongoose.Schema.Types.ObjectId, ref: "ingredient", required: true },
  quantity: { type: Number, required: true },
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  region: { type: String, required: true }, 
  ingredients: [ingredientRecipeSchema],
});


const recipeModel = mongoose.models.recipe || mongoose.model("recipe", recipeSchema);

export default recipeModel;
