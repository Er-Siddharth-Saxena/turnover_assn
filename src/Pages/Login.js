import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [data,setData]=useState({
        email:'',
        password:''})

    const LoginUser=(e)=>{
        e.preventDefault();
        axios.get('/')
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={LoginUser}>
            <label>Email</label>
            <input type='email' placeholder='Enter' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
            <label>Password</label>
            <input type='password' placeholder='Enter' value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login