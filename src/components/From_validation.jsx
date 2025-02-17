import React , {useState} from 'react'

export const From_validation = () => {

    const[name , setname]=useState("")
    const[password , setpassword]=useState("")
    const[checkbox , setcheckbox]=useState(false)
    function loggedin(){
        
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loggedin}>
        <input type='text' placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
        <input type='password' onChange={(e)=>setpassword(e.target.value)}/>
        <input type='checkbox' onChange={(e)=>setcheckbox(e.target.checked)}/>
        <button type="submit">login</button>
        </form>

    </div>
  )
}
