import React from 'react'
import './App.css'
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
import Home from "./components/Home.js"
import { Route, Routes } from 'react-router-dom'
import Congrats from './components/Congrats'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/congrats' element={<Congrats/>}/>
    </Routes>
    </div>
  )
}

export default App