import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

    const [data , setData] = useState({ email:"", password:"" });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handlSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/login',data);
            const {success,message} = response.data;
          
            if(success){
              console.log('Login Successfully')
              navigate('/congrats')
            }
            else{
              console.log(message);
            }
        }
        catch(error){
            console.log("Login Data not matched")
        }
    }

  return (
    <div className='login_container'>
     <h1 className='login_heading'>Login Page</h1>
     <form className='login-form' onSubmit={handlSubmit}>
        <div className='main'>
            <label htmlFor="">Email</label>
            <input placeholder='Enter Email' type="email" name='email' onChange={handleChange}/>
        </div>

        <div className='main'>
            <label htmlFor="">Password</label>
            <input placeholder='Enter Password' type="password" name='password' onChange={handleChange}/>
        </div>
        

        <button className='btn' type='submit'>Login</button>
     </form>
     <span>
        Not Registered : 
        <Link to={'/signup'} >Signup</Link>
     </span>
    </div>
  )
}

export default Login