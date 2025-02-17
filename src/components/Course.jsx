import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Course = () => {
  return (
    <div>
      <h1>hello whice course do you want</h1>
      <ul>
      <li><Link to="course1">Course 1</Link></li>
      <li><Link to="course2">Course 2</Link></li>
      <li><Link to="course3">Course 3</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Course
