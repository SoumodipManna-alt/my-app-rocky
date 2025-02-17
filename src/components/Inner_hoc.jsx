import React, { useState } from 'react'

const Inner_hoc = () => {
   const[count ,setcount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>update</button>
    </div>
  )
}

export default Inner_hoc