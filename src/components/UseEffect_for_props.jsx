import React, { useEffect } from 'react'

const UseEffect_for_props = (props) => {
    useEffect(()=>{
        alert('count'+props.count)
    },[props.data])
    useEffect(()=>{
        alert('count'+props.count)
    },[props.count])
  return (
    <div><h1>{props.count}</h1>
    <h1>{props.data}</h1>
    
    </div>
  )
}

export default UseEffect_for_props