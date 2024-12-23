import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResNav from './ResNav'
import Card from './Card'
import Reshero from './Reshero'
import Lending from './Lending';
import Navbar from './Navbar';

function Hotel() {
  return (
    <div>
      <ResNav/>
      {/* <Navbar/> */}
    </div>
  )
}

export default Hotel