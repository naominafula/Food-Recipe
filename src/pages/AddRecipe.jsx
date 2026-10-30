function AddRecipe() {
  return (
    <div className="page add-recipe-page">
      <div className="auth-card">
        <h1>Add a recipe</h1>
        <p>Share your favorite meal with the RecipeHub community.</p>

        <form className="auth-form">
          <label>
            Recipe name
            <input type="text" placeholder="Spicy Veggie Bowl" />
          </label>
          <label>
            Category
            <input type="text" placeholder="Dinner" />
          </label>
          <label>
            Cooking time
            <input type="text" placeholder="30 min" />
          </label>
          <label>
            Ingredients
            <textarea rows="4" placeholder="List your ingredients here..." />
          </label>
          <label>
            Instructions
            <textarea rows="5" placeholder="Describe how to cook it..." />
          </label>
          <button type="submit" className="btn btn-primary full-width">
            Publish Recipe
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddRecipe
