
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { searchRecipes } from "../services/api";

function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const results = await searchRecipes(search.trim());

      setRecipes(results);

      if (results.length === 0) {
        setError("No recipes found. Try another food name.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">

          <span className="hero-label">
            DISCOVER. COOK. SHARE.
          </span>

          <h1>
            What Would You <br />
            Like To <span>Cook Today?</span>
          </h1>

          <p>
            Search thousands of delicious food ideas
            and discover how to prepare your favourite meals.
          </p>

          <form onSubmit={handleSearch} className="search-form">

            <input
              type="text"
              placeholder="Search chicken, pizza, pasta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />


<section className="categories-section">

  <div className="section-heading">
    <div>
      <span>EXPLORE BY CATEGORY</span>
      <h2>What Are You Craving?</h2>
    </div>
  </div>

  <div className="category-grid">

    {[
      { name: "Breakfast", icon: "🍳" },
      { name: "Lunch", icon: "🍛" },
      { name: "Dinner", icon: "🍲" },
      { name: "Snacks", icon: "🍟" },
      { name: "Desserts", icon: "🍰" },
      { name: "Drinks", icon: "🥤" }
    ].map((category) => (

      <button
        className="category-card"
        key={category.name}
        type="button"
        onClick={() => {
          setSearch(category.name);
        }}
      >
        <span>{category.icon}</span>
        <h3>{category.name}</h3>
        <small>Explore recipes</small>
      </button>

    ))}

  </div>

</section>


            <button type="submit">
              Search Recipes
            </button>

          </form>

        </div>
      </section>

      <section className="recipes-section">

        <div className="section-heading">
          <div>
            <span>RECIPE DISCOVERY</span>
            <h2>Search Results</h2>
          </div>
        </div>

        {loading && <p>Searching for recipes...</p>}

        {error && <p>{error}</p>}

        <div className="recipe-grid">

          {recipes.map((recipe) => (

            <div className="recipe-card" key={recipe.idMeal}>

              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />

              <div className="recipe-info">

                <span className="category">
                  {recipe.strCategory || "Recipe"}
                </span>

                <h3>{recipe.strMeal}</h3>

                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="view-button"
                >
                  View Full Recipe
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  );
}

export default Home;
