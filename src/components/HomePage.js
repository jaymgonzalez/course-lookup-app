import React from "react"
import { Link } from "react-router-dom"
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>My course Admin Page</h1>
      <p>React, JavaScript, AWS and all the courses that I did in the past few years.</p>
      <Link to="courses" className="btn btn-primary">
        Courses
      </Link>
    </div>
  )
}

export default HomePage
