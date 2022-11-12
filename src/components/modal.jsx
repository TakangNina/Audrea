import React from 'react'
import "./modal.css"
import { useState } from 'react'
const Modal = () => {
    const [loading,setLoading]=useState(false)
    const submit=async(e)=>{

const response=await fetch("http://localhost:5000/api/v1/login",{
    method:"post",
    headers:{
        "Content-type":"Application/json"
    },
    body:JSON.stringify({
        email,
        password
    })
})
if(!response.ok){
    // bad response here
    // or login fail here 
    alert("Couldn't find user")
    return
}
console.log(response)

setLoading(true)






    }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div className='modal-container'  style={{display:loading?"none":"block"}}>
        <h2>
            Login before you can create write
        </h2>
<div className="login__body">
    
    
       <div className="input">
         <p>Email </p>
         <input type="email" name="email" required placeholder="Email"  onChange={(e)=>{
            setEmail(e.target.value)
         }} />
       </div>
       <div className="input">
         <p>Password </p>
         <input type="password" name="pass" required  placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value)
         }}  />
       </div>
 
       <div className="button">
      <button onClick={submit}>Submit</button>
       </div>
</div>
    </div>
  )
}

export default Modal