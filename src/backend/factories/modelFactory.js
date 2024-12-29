import ingredientModel from "../models/ingredientModel.js";
import recipeModel from "../models/recipeModel.js";
import cartModel from "../models/cartModel.js";
import orderModel from "../models/orderModel.js";

class ModelFactory {
  static getModel(type) {
    switch (type) {
      case "ingredient":
        return ingredientModel;
      case "recipe":
        return recipeModel;
      case "cart":
        return cartModel;
      case "order":
        return orderModel;
      default:
        throw new Error("Invalid model type");
    }
  }
}

export default ModelFactory;
