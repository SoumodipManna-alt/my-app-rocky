import React,{useState} from 'react'

const Counter = (props) => {
    let [count , setvalue]=useState(0)
    function update_value(){
        setvalue(count+1)
    }
    console.warn("------------")
  return (
    <div><h1>{count}</h1>
    <button onClick={update_value}>increment_by 1</button> 
    <button onClick={props.fun1}>click</button>
    </div>
  )
}

// note in 9 number line during function calling we only write function name not '()'

export default Counter