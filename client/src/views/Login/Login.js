import React, { useState ,useEffect} from 'react'
import "./Login.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')

  const Login = async ()=>{
 const response = await axios.post('/login',{
  email : email,
  password : password
 })
 alert(response?.data?.message)
 if(response?.data?.success){
  localStorage.getItem("user",JSON.stringify(response?.data?.data))
  window.location.href="/"
 }
  }
  
  useEffect(()=>{
    const storageuser = JSON.parse(localStorage.getItem("user" || '{}'));
    if(storageuser?.email){
      alert("you aready logged in !")
      window.location.href="/"
    }
    },[])
  return (
    <div>
      <Navbar/>
      <div>
      <form>
        <div className='login-form-container'>
          <input type='email'
          value={email} 
          placeholder='Email'
          className='input-container'
          onChange={(e)=>{
          setEmail(e.target.value)
          }}
          />
          <input type='password'  
          className='input-container'
          value={password}
          placeholder='password'
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          />
          <button type="button" className="sign-up-btn" onClick={Login}>Login</button>
          <Link to="/signup" className='register-first-link'>Register Now</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login