import React, { useState } from 'react'



const Register = () => {
    const [data,setData]=useState({
        name:'',
        email: '',
        password: ''
    });

    const RegisterUser=(e)=>{
        e.preventDefault();
}
  return (
    <div>
        <h1>Create your account</h1>
        <form onSubmit={RegisterUser}>
            <label>Name</label>
            <input type='text' placeholder='Enter' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} />
            <label>Email</label>
            <input type='email' placeholder='Enter' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
            <label>Password</label>
            <input type='password' placeholder='Enter'  value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
            <button type='submit'>Create Account</button>
        </form>
    </div>
  )
}

export default Register