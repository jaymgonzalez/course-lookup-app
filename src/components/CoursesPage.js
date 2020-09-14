import React, { useState, useEffect } from "react"
import courseStore from "../stores/courseStore"
import CourseList from "./CourseList"
import { Link } from "react-router-dom"
import { loadCourses, deleteCourse } from "../actions/courseActions"
import * as authorApi from "../api/authorApi"

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses())
  const [authors, setAuthors] = useState(authorApi.getAuthors())

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    if (courseStore.getCourses().length === 0) loadCourses()
    return () => courseStore.removeChangeListener(onChange)
  }, [])

  function onChange() {
    setCourses(courseStore.getCourses())
  }

  useEffect(() => {
    authorApi.getAuthors().then((_authors) => setAuthors(_authors))
  }, [])

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList
        authors={authors}
        courses={courses}
        deleteCourse={deleteCourse}
      />
    </>
  )
}

export default CoursesPage
