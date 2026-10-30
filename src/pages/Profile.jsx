function Profile() {
  return (
    <div className="page profile-page">
      <div className="auth-card profile-card">
        <div className="avatar">JD</div>
        <h1>Jane Doe</h1>
        <p>Food enthusiast • Home cook</p>

        <div className="stats-grid">
          <div>
            <strong>24</strong>
            <span>Recipes</span>
          </div>
          <div>
            <strong>12</strong>
            <span>Favorites</span>
          </div>
          <div>
            <strong>8</strong>
            <span>Collections</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
