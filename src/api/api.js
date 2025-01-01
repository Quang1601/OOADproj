export const fetchRecipePrice = async (recipeId) => {
    const response = await fetch(`http://localhost:4000/api/recipes/${recipeId}/price`);
    if (!response.ok) {
        throw new Error("Failed to fetch recipe price");

    }
    const data = await response.json();
    return data.price;
};
