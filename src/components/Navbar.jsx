import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/add-recipe', label: 'Add Recipe' },
  { to: '/profile', label: 'Profile' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand-wrap">
        <div className="brand-mark">R</div>
        <div>
          <p className="brand-name">RecipeHub</p>
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <NavLink to="/login" className="btn btn-light">
          Login
        </NavLink>
        <NavLink to="/register" className="btn btn-primary">
          Sign Up
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
