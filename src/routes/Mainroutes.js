import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Mainroutes = () => {
  return (
    <div>

        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>  
        <Footer/>
        </BrowserRouter>
      
    </div>
  )
}

export default Mainroutes
