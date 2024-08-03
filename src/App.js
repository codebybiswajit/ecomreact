import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import About from './Component/About'
import Products from './Component/Products'
import Contactus from './Component/Contactus'
import Blog from './Component/Blog'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ecomreact/home" element={<Home />} />
          <Route path="/ecomreact/" element={<Home />} />
          
          <Route path="/ecomreact/about" element={<About />} />
          <Route path="/ecomreact/products" element={<Products />} />
          <Route path="/ecomreact/contactus" element={<Contactus />} />
          <Route path="/ecomreact/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
