import React from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate();

  return (
    <>
    <body>
    <div className='container'>
    <div className='boxform'>
    <form className='form'>
        <label htmlFor="name">Name</label><br></br>
        <input type="text" id='name' className='inputs'></input><br></br>
        <label htmlFor="email">Email</label><br></br>
        <input type="email" id="email"  className='inputs'></input><br></br>
        <label htmlFor='username'>Username</label><br></br>
        <input type='text' id="username"  className='inputs'></input><br></br>
        <label htmlFor='password'>Password</label><br></br>
        <input type="password" id="password"  className='inputs'></input><br></br>
        <button type="button" className='button'>Submit</button>
        <button type="button" id='login' className="button" onClick={()=>navigate('/login')}>LogIn</button>
    </form>
    </div>
    </div>
    </body>
    </>
  )
}

export default Register