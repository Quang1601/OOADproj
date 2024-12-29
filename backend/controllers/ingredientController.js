import ingredientModel from "../models/ingredientModel.js";

export const addIngredient = async (req, res) => {
  try {
    const { name, quantity, unit, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const newIngredient = await ingredientModel.create({
      name,
      quantity,
      unit,
      price,
      image,
    });
    res.status(201).json({ success: true, data: newIngredient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
  
export const getAllIngredients = async (req, res) => {
    try {
      const ingredients = await ingredientModel.find({});
      res.status(200).json({ ingredients });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const updateIngredient = async (req, res) => {
    const { ingredientId } = req.params;
    const updates = req.body;
  
    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }
  
    try {
      const updatedIngredient = await ingredientModel.findByIdAndUpdate(
        ingredientId,
        updates,
        { new: true }
      );
  
      if (!updatedIngredient) {
        return res.status(404).json({ error: "Ingredient not found" });
      }
  
      res.status(200).json({
        message: "Ingredient updated successfully",
        ingredient: updatedIngredient,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const deleteIngredient = async (req, res) => {
    const { ingredientId } = req.params; 
    try {
      const deletedIngredient = await ingredientModel.findByIdAndDelete(ingredientId);
      if (!deletedIngredient) {
        return res.status(404).json({ error: "Ingredient not found" });
      }
      res.status(200).json({ message: "Ingredient deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 
