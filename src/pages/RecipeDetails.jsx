import { Link, useParams } from 'react-router-dom'

const recipeData = {
  1: {
    id: 1,
    title: 'Crispy Chicken Tacos',
    category: 'Mexican',
    time: '25 min',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80',
    description:
      'Tender chicken, crunchy slaw, and a zesty lime crema make this an easy weeknight favorite.',
    ingredients: ['Chicken thighs', 'Tortillas', 'Cabbage', 'Lime', 'Greek yogurt'],
    steps: [
      'Season the chicken with chili powder, cumin, and garlic.',
      'Cook until golden and fully done, then slice thinly.',
      'Warm the tortillas and fill with chicken, slaw, and crema.',
      'Top with salsa and serve immediately.',
    ],
  },
  2: {
    id: 2,
    title: 'Avocado Pesto Pasta',
    category: 'Italian',
    time: '20 min',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    description:
      'Creamy pesto and avocado come together for a vibrant, comforting pasta bowl.',
    ingredients: ['Pasta', 'Avocado', 'Basil', 'Garlic', 'Parmesan'],
    steps: [
      'Cook pasta until al dente and reserve a little cooking water.',
      'Blend avocado, basil, garlic, and parmesan into a smooth pesto.',
      'Toss the pasta with the pesto and a splash of pasta water.',
      'Serve with lemon zest and extra parmesan.',
    ],
  },
}

function RecipeDetails() {
  const { id } = useParams()
  const recipe = recipeData[id] || recipeData[1]

  return (
    <div className="page recipe-details-page">
      <Link to="/dashboard" className="back-link">
        ← Back to recipes
      </Link>

      <div className="recipe-detail-card">
        <img src={recipe.image} alt={recipe.title} className="detail-image" />

        <div className="detail-content">
          <p className="eyebrow">{recipe.category}</p>
          <h1>{recipe.title}</h1>
          <div className="detail-meta">
            <span>★ {recipe.rating}</span>
            <span>{recipe.time}</span>
          </div>
          <p>{recipe.description}</p>

          <div className="detail-columns">
            <div>
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Instructions</h3>
              <ol>
                {recipe.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
