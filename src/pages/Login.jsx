import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Log in to save your favorite dishes and create collections.</p>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn btn-primary full-width">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
