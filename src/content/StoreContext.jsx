import React, { createContext, useState, useEffect } from 'react';
import { food_list as initialFoodList } from '../assets/assets/frontend_assets/assets';
import { populateFoodListPrices } from '../utils/populateFoodListPrices';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [food_list, setFoodList] = useState(initialFoodList);
  const [cartItems, setCartItems] = useState({});
  const [cartIngredients, setCartIngredients] = useState([]);

  useEffect(() => {
    const updateFoodPrices = async () => {
      try {
        const updatedList = await populateFoodListPrices(initialFoodList);
        setFoodList(updatedList);
      } catch (error) {
        console.error("Error updating food prices:", error.message);
      }
    };
    updateFoodPrices();
  }, []);

  const addIngredientToCart = (ingredient) => {
    setCartIngredients(prevIngredients => {
      const existingIngredient = prevIngredients.find(item => item.ingredientId._id === ingredient.ingredientId._id);
      if (existingIngredient) {
        return prevIngredients.map(item =>
          item.ingredientId._id === ingredient.ingredientId._id
            ? { ...item, quantity: item.quantity + ingredient.quantity }
            : item
        );
      } else {
        return [...prevIngredients, ingredient];
      }
    });
  };

  const removeIngredientFromCart = (ingredientId) => {
    setCartIngredients(prevIngredients =>
      prevIngredients.filter(item => item.ingredientId._id !== ingredientId)
    );
  };

  const contextValue = {
    food_list,
    cartItems,
    cartIngredients,
    addIngredientToCart,
    removeIngredientFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;