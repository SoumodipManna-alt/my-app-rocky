import React, { useRef } from 'react'

const Useref = () => {
    function getdata(){

        console.log(inp_ref.current.value);
        inp_ref.current.style.color="red"
        inp_ref.current.focus()
    }
    let inp_ref = useRef()
  return (
    <div>
      <input type="text" ref={inp_ref}/>
      <button onClick={getdata}>Click me </button>
    </div>
  )
}

export default Useref
