import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'

const featuredRecipes = [
  {
    id: 1,
    title: 'Crispy Chicken Tacos',
    category: 'Mexican',
    time: '25 min',
    rating: 4.8,
    description: 'Loaded with crunchy slaw, lime crema, and smoky seasoning.',
    image:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Avocado Pesto Pasta',
    category: 'Italian',
    time: '20 min',
    rating: 4.9,
    description: 'Creamy, bright, and ready in under half an hour.',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Berry Yogurt Bowl',
    category: 'Breakfast',
    time: '10 min',
    rating: 4.7,
    description: 'A refreshing sweet-and-salty start to your morning.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  },
]

function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Fresh ideas every day</p>
          <h1>Discover recipes you’ll want to cook again and again.</h1>
          <p className="lead">
            Explore quick meals, family classics, and trending dishes curated for every craving.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard" className="btn btn-primary">
              Explore Recipes
            </Link>
            <Link to="/add-recipe" className="btn btn-light">
              Share a Recipe
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="mini-card top-card">
            <span>Trending</span>
            <strong>Healthy Dinner Picks</strong>
          </div>
          <div className="mini-card bottom-card">
            <span>Collection</span>
            <strong>24 easy meals</strong>
          </div>
        </div>
      </section>

      <section className="search-section">
        <SearchBar />
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <h2>Popular recipes</h2>
          <Link to="/dashboard" className="text-link">
            View all
          </Link>
        </div>

        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
