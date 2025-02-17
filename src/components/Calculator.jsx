import React, {useState} from 'react'

const Calculator = (sign) => {
    const [num1 , setnum1]=useState(null)
    const [num2 , setnum2]=useState(null)
    const [result , setnum3]= useState(null)
    
    const getvalue = (val)=>{
        if((num1 && num2)===null)
        {
            alert('plz put number ')
            return
        }
        
        switch(val){
            case 'Plush':
                setnum3(+num1 + +num2)
                break
            case 'Minus':
                setnum3(num1-num2)
                break
            case 'Mul':
                setnum3(+num1* +num2)
                break
            case 'Div':
                setnum3(+num1 / +num2)
                break 
            default:
                alert('worng selected')
        }
        
        
        };

  return (
    <div>
        <input type="text" value={num1} onChange={(e)=>setnum1(e.target.value)}/>
        <input type="text" value={num2} onChange={(e)=>setnum2(e.target.value)}/>
        <textarea type="text" value={result}/>
        <ol id="">
        {sign.operator.map((val)=><li onClick={()=>getvalue(val)}>{val}</li>)}
        </ol>
        <ul></ul>
    </div>
  )
}

export default Calculator