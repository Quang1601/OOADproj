import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { food_list } from "../../assets/assets/frontend_assets/assets"; 
import "./Recipe.css";



const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const handleOrderIngredients = () => {
    navigate('/order', { state: { ingredients: recipe.ingredients } });
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/recipe/find/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await response.json();
        
        const foodItem = food_list.find(item => item._id === id);
        if (foodItem) {
          data.instructions = foodItem.instructions || [];
          data.image = foodItem.image;
        }

        setRecipe(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name}/>
      <h3>Ingredients:</h3>
      {recipe.ingredients && recipe.ingredients.length > 0 ? (
      <ul >
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-list">
                <p>{ingredient.ingredientId.name}: {ingredient.quantity}{ingredient.ingredientId.unit}</p>
                <img
                  className="ingredient-image"
                  src={`http://localhost:4000/recipe${ingredient.ingredientId.image}`}
                  alt={ingredient.ingredientId.name}
                />
                <br /><br />
            </li>
          ))}
      </ul>
      ) : (
        <p>No ingredients listed.</p>
      )}

      <h3>Instructions:</h3>
      {recipe.instructions && recipe.instructions.length > 0 ? (
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step.text}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available.</p>
      )}
      <button className="order-buton" onClick={handleOrderIngredients}>
        Order Ingredients
      </button>
    </div>
  );
};

export default Recipe;
