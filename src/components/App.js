import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from "./Home"
import Navbar from './Navbar'
import PassValidator from './passvalidator'
import About from './about'
import Contact from './contact'
/**
 * App component is the main entry point of the React application.
 * It sets up the routing and renders different components based on the URL.
 * */
export default function App() {
  return (
    <BrowserRouter>
   {/* Navbar component rendered at the top of the application  */}
    <Navbar/>
     {/* Routes component defines the routing configuration */}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/PassValidator' element={<PassValidator/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}
