import React from 'react'

const Reuse_component = (props) => {
  return (
    <div>
        <span>{props.data.name}</span>
        <span>{props.data.age}</span>
        <span>{props.data.email}</span>
        <button onClick={()=>props.fun(props.data.name)}>clickme</button>

    </div>
  )
}

export default Reuse_component