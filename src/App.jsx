import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import About from './Component/About'
import Services from './Component/services'
import Team from './Component/Team'




const App = () => {
  return (
 <>
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />
  <Route path='/services' element={ <Services/>} />
  <Route path='/team' element={ <Team/>} />
</Routes>
<Footer />
 
 </>
  )
}

export default App