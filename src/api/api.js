export const fetchRecipePrice = async (recipeId) => {
    const response = await fetch(`/api/recipes/${recipeId}/price`);
    if (!response.ok) {
        throw new Error("Failed to fetch recipe price");

    }
    const data = await response.json();
    console.log(data.price);
    return data.price;
};
