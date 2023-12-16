import React, { useEffect, useState } from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import ImgURL from "./../Signup/login-illustration.png";
import axios from "axios";
import { Link } from "react-router-dom";

 export default function Signup() {

    useEffect(()=>{
     const storageUser = JSON.parse(localStorage.getItem("user" || '{}'));
     if(storageUser?.email){
        alert("you already register here!");
        window.location.href="/"
     }  
    },[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("female");

  const signupfor =  async () =>{

    if(!name){
      alert('name is required');
      return;
  }
  if(!email){
      alert('email is required');
      return;
  }
  if(!password){
      alert('password is required');
      return;
  }
  if(!mobile){
      alert('mobile is required');
      return;
  }
 
  const response = await axios.post(
    '/signup',{
    name : name,
    email : email,
    password : password,
    mobile : mobile,
    gender : gender
  })
  if(response?.data?.success){
    alert(response?.data?.message);
    window.location.href="/login"
  }else{
    alert(response?.data?.message)
  }
  }

  return (
    <>
      <Navbar />
      <div className="main-signup-form-container">
        <div>
          <img src={ImgURL} className="signup-illustration-image"  alt=""/>
        </div>
        <div>
          <form className="signup-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="input-box"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              type="Email"
              placeholder="Email"
              value={email}
              className="input-box"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="Password"
              placeholder="Password"
              value={password}
              className="input-box"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="Number"
              placeholder="mobile"
              value={mobile}
              className="input-box"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
         <span className="radio-btn-container">
          <input type="radio"
          id="male"
          name="gender"
          className="radio-button"
          checked={gender === 'male'}
          onClick={()=>{
            setGender("male")
          }}
          />
         <label htmlFor="male">male</label>

         <input type="radio"
          id="female"
          name="gender"
          className="radio-button"
          checked={gender === 'female'}
          onClick={()=>{
            setGender("female")
          }}
          />
         <label htmlFor="female">female</label>
         </span>
            
            <button type="button" className="sign-up-btn" onClick={signupfor }>Signup</button>
            <Link to="/login" className=' already-register-user-link'>alredy have an account ?</Link>
          </form>
        </div>
      </div>
    </>
  );
}


