import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reshero from './Webcomponent/Reshero'
import Card from './Webcomponent/Card'
  
import Lending from './Webcomponent/Lending';
import Hotel from './Webcomponent/Hotel';
import ResNav from './Webcomponent/ResNav';
import Login from './Login/Login';
import ResCarosel from './Webcomponent/ResCarosel';
import Footer from './Webcomponent/Footer';
import Hero from './Webappcomponent/Hero';
import Register from './Webcomponent/Register';
import DesLogin from './Webcomponent/DesLogin';
 
function App() {
  return (
    <div className='bg-gray-200'>
      <BrowserRouter>
      <ResNav/>
        <Routes>
        <Route path="/"  />
          <Route path="/hero" element={< ResCarosel/>} />
          <Route path="/card" element={<Hero/>} />
          <Route path="/preview" element={<Lending/>} />
          <Route path="/Login" element={<DesLogin/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
       
      </BrowserRouter>
       
    </div>
  )
}

export default App;