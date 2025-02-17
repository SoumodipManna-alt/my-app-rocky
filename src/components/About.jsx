import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  return (
    <div><h1>HEllo about page</h1>
    <button onClick={()=>{navigate('/')}}>go to home</button>
    <button onClick={()=>{navigate('/User/Anil')}}>go to anil details</button>
    </div>  )
}

export default About