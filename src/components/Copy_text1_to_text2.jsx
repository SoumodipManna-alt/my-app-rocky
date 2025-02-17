import React , {useState} from 'react'

const Copy_text1_to_text2 = () => {
    const [num , setNumber]=useState(0)
    const [num2 , setNumber2]=useState(num)



  return (
    <div>
        <input type="text"  value={num} onChange={(e)=>{setNumber(e.target.value) ;setNumber2(num)}}/>
        <textarea disabled type="text"  value={num2} />
        <h1>{num}</h1>
        

    </div>
  )
}

export default Copy_text1_to_text2