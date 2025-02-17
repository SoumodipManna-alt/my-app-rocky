
import React,{useState} from 'react'

const Car = (props) => {
   
    const [typeCars , update_state]=useState(props.cars)
    const [typebus , update_car]=useState(props.bus)
    const update_value = () =>{
        let car=props.cars
        update_state(typebus)
        update_car(car)
    }

  return (
    <div>
        <ol>
            {typeCars.map((val)=><li>{val}</li>)}
            <button onClick={update_value}>update</button>
        </ol>
    </div>
  )
}

export default Car
