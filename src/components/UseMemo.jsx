import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[count , setcount]=useState(0)
    const[data,setData]=useState(0)
    // function check_fun(){
    //     console.log("check",count);
    //     return count*3
        
        //note it called for two button
    // }
    const check_fun = useMemo(()=>{
        console.log("check",count);
    },[count])
  return (
    <div>
      <h1>count:{count}</h1>
      <h2>data:{data}</h2>
        <p>{check_fun}</p>
        <button onClick={()=>{setcount(count+1)}}>count</button>
        <button onClick={()=>{setData(data+1)}}>data</button>

    </div>
  )
}

export default UseMemo
