import React, { useState, useContext } from 'react'
import './auth.scss';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from "../context/authContext";

const Login = () => {

  const[inputs, setInputs] = useState({
    email:"",
    password:"",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
  //     await axios.post("http://localhost:8800/api/auth/login", inputs);
  //     // console.log(res);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='email' name='email' onChange={handleChange}/>
        <input type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        <p className='p-err'>{err}</p>
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
      </div>
  )
}
 
export default Login