import React ,{use, useState} from 'react'

const Button_toggle = () => {
    const [state1 ,setstate]=useState(true)
    const [ state2 ,setstate2]=useState(null)
  return (
    <div>
      {state1?
      <h1>hello</h1>
      :null
    }

      <button onClick={()=>setstate(false)}>hide</button>
      <button onClick={()=>setstate(true)}>show</button>
      <button onClick={()=>setstate(!state1)}>toggle</button>

    </div>
  )
}

export default Button_toggle
