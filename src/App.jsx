import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Home from './pages/Home'
import Details from './pages/Details'
import Contact from './pages/Contact'
import Upcoming from './pages/Upcoming'
import Past from './pages/Past'
import Stats from './pages/Stats'






function App() {

  return (
    <>
      <Router>
      < Menu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/upcoming' element={<Upcoming/>} />
          <Route path='/past' element={<Past/>} />
          <Route path='/stats' element={<Stats/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<h1>ERROR</h1>} />
        </Routes>
        <Footer/>
      </Router>     
    </>
  )
}

export default App
