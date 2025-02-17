import React ,{useRef} from 'react'

const Un_controll_component = () => {
  let input_ref=useRef()
    function submit(e){
        let input2=document.getElementById('input').value

        e.preventDefault() // to prevent by submitting+
        console.log(input_ref.current.value);
        console.log(input2);
        

    }
  return (
    <div>
        <form onSubmit={submit}>
      <input type="text" ref={input_ref} /><br/><br/>
      <input type='text' id='input'/><br/><br/>

      <button>submit</button>
      </form>
    </div>
  )
}

export default Un_controll_component
