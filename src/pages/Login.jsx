import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>MINU CHAT</span>
        <span className='title'>Login </span>
        <form>
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