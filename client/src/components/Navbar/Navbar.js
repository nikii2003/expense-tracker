import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const [user,setUser]=useState({});

  useEffect(()=>{
    const storageuser = JSON.parse(localStorage.getItem('user') || `{}`);
    setUser(storageuser);
  },[])
  return (
    <div>
      <div className="navbar-container">
          <div className="Navbar-item">
          <Link to="/" className="logo">Expense-Tracker....</Link>
       
        <div className="flex-container">
          <Link to="/signup" className="text-item">Signup</Link>
        
       
          <Link to="/login" className="text-item">Login</Link>

          <Link to='/transaction' className="text-item">Transaction</Link>
          </div>
          <span className="user">Hello,{ user.name || "user!"}</span>
          {user?.name ? (
            <span
              className="navbar-logout"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login" ;
              }}
            >
              <span className="logout">Logout</span>
            </span>
          ) : null}
          
          </div>
          
      </div>
    
    </div>
  );
}

export default Navbar;
