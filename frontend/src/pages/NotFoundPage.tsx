import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NotFoundPage 