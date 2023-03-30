import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './auth.scss';
import axios from 'axios';

const Register = () => {

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const[inputs, setInputs] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  });

  const handleChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      // console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='reg'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='First Name' name='firstname' onChange={handleChange}/>
        <input type='text' placeholder='Last Name' name='lastname' onChange={handleChange}/>
        <input type='text' placeholder='Email' name='email' onChange={handleChange}/>
        <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
        {/* <input type='password' placeholder='Re-write password' onChange={handleChange}/> */}
        <button onClick={handleSubmit}>Register</button>
        <p className='p-err'>{err}</p>
        <span>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div> 
  )
}

export default Register