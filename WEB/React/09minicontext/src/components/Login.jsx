import React from "react";
import { useState, useContext } from "react";
import Usercontext from "../context/UserContext";

function Login() {
const [username,setUsename]=useState('')
const [password,setPassword]=useState('')

const {setUser} = useContext(Usercontext) 

  const handlesubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e) =>setUsename(e.target.value)}
      placeholder="username" />
      <input type="text"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       placeholder="password" />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
