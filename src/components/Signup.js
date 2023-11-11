import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [data , setData] = useState({
    name:'',
    email:"",
    password:""
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data);

    try{
      const response = await axios.post('http://localhost:3001/signup',data);
      console.log(response.data);
  }
  catch(error){
      console.log(error)
  }
  }

  const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name] : e.target.value,
      });
  }

  return (
    <div className='login_container'>
    <h1 className='login_heading'>Signup Page</h1>
    <form className='login-form' onSubmit={handleSubmit}>
        <div className='main'>
           <label htmlFor="">Name</label>
           <input placeholder='Enter Name' type="text" name='name' onChange={handleChange}/>
       </div>

       <div className='main'>
           <label htmlFor="">Email</label>
           <input placeholder='Enter Email' type="email" name='email' onChange={handleChange}/>
       </div>

       <div className='main'>
           <label htmlFor="">Password</label>
           <input placeholder='Enter Password' type="password" name='password' onChange={handleChange}/>
       </div>
       
       <button type='submit' className='btn'>Signup</button>

    </form>
    <span>
       Already Registered : 
       <Link to={'/login'}>Login</Link>
    </span>
   </div>
  )
}

export default Signup