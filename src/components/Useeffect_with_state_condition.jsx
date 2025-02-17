import React,{useState,useEffect} from 'react'

const Useeffect_with_state_condition = () => {
    const [count ,setcount]=useState(0)
    const [data , setdata]=useState(1)
    // useEffect(()=>{
    //    console.warn(count,data)

    // })
    useEffect(()=>{
        console.warn('count',count)
 
     },[count])
     useEffect(()=>{
        console.warn('data',data)
 
     },[data])
  return (
    <div>
        <h1>{count}</h1>
        <h2>{data}</h2>
      <button onClick={()=>setcount(count+1) }>update count</button>
      <button onClick={()=>setdata(data+1) }>update data</button>
    </div>
  )
}

export default Useeffect_with_state_condition


// note: 6-9 'useEffect' will run for both count , digit if update
//10-13 only for count and 14-17 for data 