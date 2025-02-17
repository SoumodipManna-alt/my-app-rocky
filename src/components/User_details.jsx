import React from 'react'
import { Link } from 'react-router-dom'
const User_details = () => {
  return (
    <div>
      <li><Link to="/User/Anil">Anil</Link></li>
      <li><Link to="/User/Peter">Peter</Link></li>
    </div>
  )
}

export default User_details
