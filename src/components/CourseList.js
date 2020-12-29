import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useAuthorsData } from "../hooks/useAuthorsData";

function CourseList(props) {

  const authorsData = useAuthorsData()

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{authorsData.map(author => author.id === course.authorId && author.name)}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default CourseList
