import React from 'react'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shoping from './pages/Shoping'
import Contact from './pages/Contact'
import Login from './pages/Login'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/services' element={<Services />}></Route>
            <Route path='/Shoping' element={<Shoping />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Login' element={<Login />}></Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App