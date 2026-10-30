
const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Search for a particular food
export const searchRecipes = async (food) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search.php?s=${encodeURIComponent(food)}`
    );

    if (!response.ok) {
      throw new Error("Unable to search recipes");
    }

    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};

// Get complete recipe details
export const getRecipeDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw new Error("Unable to retrieve recipe");
  }

  const data = await response.json();

  return data.meals?.[0] || null;
};

// Search recipes by food category
export const getRecipesByCategory = async (category) => {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
  );

  if (!response.ok) {
    throw new Error("Unable to retrieve category");
  }

  const data = await response.json();

  return data.meals || [];
};
