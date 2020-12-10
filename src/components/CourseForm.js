import React, { useState, useEffect } from "react"
import TextInput from "./common/TextInput"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

const url = 'https://course-pluralsight-api.herokuapp.com/authors'

function CourseForm(props) {

  const [authorsData, setAuthorsData] = useState([]);

  useEffect(() => {
    getAuthorsData()
  }, [])


  const getAuthorsData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setAuthorsData(jsonData);
  }

  if (typeof props.course !== "undefined") {
    return (
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="title"
          label="Title"
          onChange={props.onChange}
          name="title"
          value={props.course.title}
          error={props.errors.title}
        />
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              onChange={props.onChange}
              value={props.course.authorId || ""}
              className="form-control"
            >
              <option value="" />
              {authorsData.map((author, i) => <option key={i} value={author.id}>{author.name}</option>)}
            </select>
          </div>
          {props.errors.authorId && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
          )}
        </div>

        <TextInput
          id="category"
          label="Category"
          name="category"
          onChange={props.onChange}
          value={props.course.category}
          error={props.errors.category}
        />

        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    )
  } else {
    return <Redirect to="/404" />
  }
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm
