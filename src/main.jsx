import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Webcomponent/Navbar.jsx'
import ResNav from './Webcomponent/ResNav.jsx'
import Reshero from './Webcomponent/Reshero.jsx'
import Card from './Webcomponent/Card.jsx'
import Lending from './Webcomponent/Lending.jsx'
 import Footer from './Webcomponent/Footer.jsx'
import Wheather from './Project/wheather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
     <Reshero/>
        <Card/>
        <Lending/>
         <Footer/>
  <ResNav/> */}
  <Wheather/>
  </StrictMode>,
)
