import { fetchRecipePrice } from "../api/api";

export const populateFoodListPrices = async (food_list) => {
    const updatedFoodList = await Promise.all(
        food_list.map(async (foodItem) => {
            try {
                const price = await fetchRecipePrice(foodItem._id);
                return { ...foodItem, price: price };
            } catch (error) {
                console.error(`Error fetching price for ${foodItem.name}:`, error.message);
                console.log(error)
                return { ...foodItem, price: 0 };
            }
        })
    );

    return updatedFoodList;
};
