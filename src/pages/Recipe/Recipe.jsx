import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets/frontend_assets/assets';
import './Recipe.css'
const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedFood = food_list.find((item) => item._id === id);
    setRecipe(selectedFood);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      

      <h3>Ingredients:</h3>
      {recipe.ingredients && recipe.ingredients.length > 0 ? ( 
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
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
    </div>
  );
};

export default Recipe;
