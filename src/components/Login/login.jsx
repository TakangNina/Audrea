import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {


  const [formData, setFormData] = useState({});
  const navigator = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value.trim()
    })
  }

  const handleSubmit = (e) => {
    navigator('../startreading');
    e.preventDefault();
    console.log(formData);

  }

  return (
    <form className='login__form'
     onSubmit={(e)=>{
      // navigator()
    navigator('../startreading');
    e.preventDefault()

    }}>

    <div className="login__body">
       <div className="input">
         <p>Username </p>
         <input type="text" name="uname" required  placeholder='Enter your name' onChange={handleChange}/>
       </div>
       <div className="input">
         <p>Password </p>
         <input type="password" name="pass" required  placeholder="Password" onChange={handleChange}/>
       </div>
       <div className="input">
         <p>Email </p>
         <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
       </div>
       <div className="input">
         <p>Phone Number </p>
         <input type="number" name="phone" required placeholder='Phone number' onChange={handleChange}/>
       </div>
       <div className="button">
      <button>Submit</button>
       </div>
</div>
</form>
  )
}

export default Login