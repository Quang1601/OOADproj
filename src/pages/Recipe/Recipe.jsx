import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets/frontend_assets/assets'; // 

const Recipe = () => {
  const { id } = useParams();  
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedFood = food_list.find((item) => item.id === id);
    setRecipe(selectedFood);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
