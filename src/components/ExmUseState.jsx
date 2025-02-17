import React, {useState} from 'react'

const ExmUseState = () => {

    const [number , setNumber] = useState(0)
    const [number2 , setNumber2] = useState(0)
    const [number3 , setNumber3] = useState(0)

    const plusNumber =()=>{
        setNumber3(+number+ +number2)
    }

    const setNumberValue =(e)=>{
        setNumber(e.target.value)
    }

  return (
    <div>
      <input type="text" value={number} onChange={(e)=>setNumberValue(e)} />
      <h1>+</h1>
      <input type="text" number={number2} onChange={(e)=>{setNumber2(e.target.value)}} />

      <button onClick={plusNumber}>PLUS</button>
        <h1>{number3}</h1>

    </div>
  )
}

export default ExmUseState
