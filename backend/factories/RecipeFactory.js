class RecipeFactory {
    static createRecipe(region, category, name) {
      const key = `${region}_${category}`;
      const strategies = {
        "north_savory": () => new Recipe(name, "savory", "north"),
        "north_soup": () => new Recipe(name, "soup", "north"),
        "north_dessert": () => new Recipe(name, "dessert", "north"),
        "south_savory": () => new Recipe(name, "savory", "south"),
        "south_soup": () => new Recipe(name, "soup", "south"),
        "south_dessert": () => new Recipe(name, "dessert", "south"),
        "central_savory": () => new Recipe(name, "savory", "central"),
        "central_soup": () => new Recipe(name, "soup", "central"),
        "central_dessert": () => new Recipe(name, "dessert", "central"),
      };
  
      if (!strategies[key]) {
        throw new Error(`No recipe type defined for region: ${region}, category: ${category}`);
      }
  
      return strategies[key]();
    }
  }
  
  class Recipe {
    constructor(name, category, region) {
      this.name = name;
      this.category = category;
      this.region = region;
      this.ingredients = []; 
    }
  
    addIngredient(ingredientId, quantity) {
      this.ingredients.push({ ingredientId, quantity });
    }
  }
  