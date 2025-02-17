import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
const User_page = () => {
    const para=useParams()
    const {name}=para
    const [searchparams,setsearchparams]=useSearchParams()
    const [searchparams1,setsearchparams1]=useSearchParams()
    console.log(searchparams.get('name'));
    
  return (
    <div>
      <h1>User {name} and user from url :: {searchparams.get('name')} component</h1>
      <button onClick={()=>{setsearchparams({name:'soumodip'})}}>set by default button</button><br></br>
      <input onChange={(e)=>{setsearchparams1({age:e.target.value})}} placeholder='Enter age'/>
      <Link to='/'>Go to home page</Link>
    </div>
  )
}


export default User_page
