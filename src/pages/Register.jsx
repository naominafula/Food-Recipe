import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h1>Create account</h1>
        <p>Join RecipeHub and start saving your favorite recipes.</p>

        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Jane Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="jane@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>
          <button type="submit" className="btn btn-primary full-width">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
