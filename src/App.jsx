import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reshero from './Webcomponent/Reshero'
import Card from './Webcomponent/Card'
  
import Lending from './Webcomponent/Lending';
import Hotel from './Webcomponent/Hotel';

function App() {
  return (
    <div className='bg-gray-700'>
      <BrowserRouter>
         <Hotel/>
        <Routes>
          <Route path="/hero" element={<Reshero />} />
          <Route path="/card" element={<Card />} />
          <Route path="/preview" element={<Lending/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;