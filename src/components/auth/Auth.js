import React, { useState } from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch()
  const [id , setId] = useState('')
  const [password , setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(id === 'aslam' || password === 'aslam123'){
      dispatch(login())
      alert('Login Successful')
    }else{
      alert('Login failed,invalid ID or Password')
    }   
  }

  const IdHandleChange = (e)=>{
    setId(e.target.value)
  }

  const passwordHandleChange = (e)=>{
    setPassword(e.target.value)
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" value={id} onChange={IdHandleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} id="password" onChange={passwordHandleChange} />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
