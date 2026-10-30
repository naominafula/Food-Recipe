import RecipeCard from '../components/RecipeCard'

const recipes = [
  {
    id: 1,
    title: 'Golden Coconut Curry',
    category: 'Dinner',
    time: '35 min',
    rating: 4.9,
    description: 'A cozy curry packed with vegetables and aromatic spices.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Herb Garden Salad',
    category: 'Healthy',
    time: '15 min',
    rating: 4.8,
    description: 'Crisp greens, fresh herbs, and a citrus vinaigrette.',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Saffron Risotto',
    category: 'Comfort',
    time: '45 min',
    rating: 4.7,
    description: 'Creamy, rich, and elegant enough for a dinner party.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Maple Oat Pancakes',
    category: 'Breakfast',
    time: '20 min',
    rating: 4.8,
    description: 'Soft pancakes with a warm maple finish and fruit topping.',
    image:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
  },
]

function Dashboard() {
  return (
    <div className="page dashboard-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Recipe feed</p>
          <h1>Browse all recipes</h1>
        </div>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
