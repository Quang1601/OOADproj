import { fetchRecipePrice } from "../api/api";

export const populateFoodListPrices = async (food_list) => {
    const updatedFoodList = await Promise.all(
        food_list.map(async (foodItem) => {
            try {
                const price = await fetchRecipePrice(foodItem._id);
                console.log(price);
                return { ...foodItem, 2 };
            } catch (error) {
                console.error(`Error fetching price for ${foodItem.name}:`, error.message);
                return { ...foodItem, price: 0 };
            }
        })
    );

    return updatedFoodList;
};
