import React from 'react'
import { Link } from 'react-router-dom'
import './auth.scss';

const Register = () => {
  return (
    <div className='reg'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='text' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <input type='password' placeholder='Re-write password'/>
        <button>Register</button>
        <span>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div> 
  )
}

export default Register