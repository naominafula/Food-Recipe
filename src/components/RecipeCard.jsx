import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-thumb" style={{ backgroundImage: `url(${recipe.image})` }} />
      <div className="recipe-body">
        <div className="recipe-meta">
          <span>{recipe.category}</span>
          <span>{recipe.time}</span>
        </div>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-footer">
          <div className="rating">★ {recipe.rating}</div>
          <Link to={`/recipe/${recipe.id}`} className="text-link">
            View recipe
          </Link>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard
