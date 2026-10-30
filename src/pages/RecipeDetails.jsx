
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/api";
import Navbar from "../components/Navbar";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeDetails(id);

        if (!data) {
          setError("Recipe not found.");
        } else {
          setRecipe(data);
        }
      } catch {
        setError("Unable to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;

  if (error) return <p>{error}</p>;

  if (!recipe) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: measure || ""
      });
    }
  }

  return (
    <>
      <Navbar />

      <main className="recipe-details">

        <div className="recipe-header">

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />

          <div>
            <span className="category">
              {recipe.strCategory}
            </span>

            <h1>{recipe.strMeal}</h1>

            <p>
              Cuisine: {recipe.strArea || "Not specified"}
            </p>

            <p>
              Cooking time: Not provided by recipe source
            </p>
          </div>

        </div>

        <div className="recipe-content">

          <section>
            <h2>Ingredients</h2>

            {ingredients.map((item, index) => (
              <div className="ingredient" key={index}>
                <span>{item.name}</span>
                <strong>{item.measure}</strong>
              </div>
            ))}

          </section>

          <section>
            <h2>Preparation Instructions</h2>

            <p className="instructions">
              {recipe.strInstructions}
            </p>

          </section>

        </div>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            Watch Preparation Video
          </a>
        )}

      </main>
    </>
  );
}

export default RecipeDetails;
