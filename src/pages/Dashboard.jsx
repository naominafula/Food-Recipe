
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <h1>Welcome to RecipeHub! 👋</h1>
          <p>Manage your recipes and discover something delicious.</p>
        </div>

        <Link to="/add-recipe" className="nav-button">
          + Add New Recipe
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🍽️</div>
          <h3>120</h3>
          <p>Available Recipes</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <h3>24</h3>
          <p>Favorite Recipes</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👨‍🍳</div>
          <h3>12</h3>
          <p>My Recipes</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <h3>8</h3>
          <p>My Reviews</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <section className="panel">
          <h2>Recently Added Recipes</h2>

          <div className="activity-list">

            <div className="activity-item">
              <div className="activity-icon">🍕</div>
              <div>
                <strong>Homemade Pizza</strong>
                <p>Recently added recipe</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🍝</div>
              <div>
                <strong>Creamy Pasta</strong>
                <p>Recently added recipe</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🍰</div>
              <div>
                <strong>Chocolate Cake</strong>
                <p>Recently added recipe</p>
              </div>
            </div>

          </div>
        </section>

        <section className="panel">
          <h2>Quick Actions</h2>

          <div className="activity-list">
            <Link to="/add-recipe" className="view-button">
              + Create Recipe
            </Link>

            <Link to="/favorites" className="view-button">
              ❤️ View Favorites
            </Link>

            <Link to="/" className="view-button">
              🔍 Discover Food
            </Link>
          </div>
        </section>

      </div>

    </main>
  );
}

export default Dashboard;
