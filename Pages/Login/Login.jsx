import React from 'react'
import './Login.css'

const Login = () => {
  return (
   <>
   <div className='container1'>
        <label htmlFor='username'>Username</label><br></br>
        <input type='text' id="username"  className='inputs'></input><br></br>
        <label htmlFor='password'>Password</label><br></br>
        <input type="password" id="password"  className='inputs'></input><br></br>
        <button type="button" className='button1'>Submit</button>
    </div>
   </>
  )
}

export default Login    