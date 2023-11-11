import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div 
    style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <button className='btn'>
            <Link to={'/login'} style={{textDecoration:'none'}}>Login</Link>
        </button>
        <button className='btn'>
        <Link to={'/signup'} style={{textDecoration:'none'}} >Signup</Link>
        </button>
    </div>
  )
}

export default Home