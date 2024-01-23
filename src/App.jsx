import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import './index.css'
import Home from '../Pages/Home/Home'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    
    
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App