import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [err,setErr]=useState(false)
 const [loading, setLoading] = useState(false);
 const navigate=useNavigate()

  const submithandler= async(e)=>{
    setLoading(true);
    e.preventDefault()
    const email=e.target[0].value;
    const password=e.target[1].value;
    try{
      
} catch (err) {
setErr(true);
setLoading(false);
}
};
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>MINU CHAT</span>
        <span className='title'>Login </span>
        <form onSubmit={submithandler}>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
         
          <button>Log in</button>
        </form>
        <p>you don't have account ? Sign in</p>
      </div>
    </div>
  )
}

export default Login