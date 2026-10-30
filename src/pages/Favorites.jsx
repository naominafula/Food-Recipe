function Favorites() {
  return (
    <div className="page favorites-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Saved recipes</p>
          <h1>Your favorites</h1>
        </div>
      </div>

      <div className="empty-state">
        <h2>No favorites yet</h2>
        <p>Save recipes you love and they’ll appear here.</p>
      </div>
    </div>
  )
}

export default Favorites
