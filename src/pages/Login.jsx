import React from 'react'
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


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
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
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
        <p>you don't have account ? <Link to='/register'>Sign in</Link></p>
      </div>
    </div>
  )
}

export default Login