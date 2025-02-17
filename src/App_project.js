import React, { useEffect, useState } from 'react'

const App_project = () => {
    const[date,setdate]=useState(null)
    const[display , setdisplay]=useState(null)
    useEffect(()=>{
        setdate(new Date().toLocaleTimeString())
        const gethour = new Date().getHours()
        if(gethour >= 12){
            setdisplay('Good Afternoon')
        }
        else if(gethour >=18){
            setdisplay('Good Evening')

        }
        else{
            setdisplay('Good morning')
        }
        
    })
  return (
    <div>
      <h1>hello sir {display} </h1>
      <h2>and time is :: {date}</h2>
    </div>
  )
}

export default App_project
