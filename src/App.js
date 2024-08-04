import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import About from './Component/About'
import Products from './Component/Products'
import Contactus from './Component/Contactus'
import Blog from './Component/Blog'
import BuyingPage from './Component/BuyingPage'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import ProductDetails from './Component/ProductDetails'
import Cart from './Component/Cart'
import BuingMethod from './Component/BuingMethod'



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
          <Route path="/ecomreact/buyingpage" element={<BuyingPage />} />          
          <Route path="/ecomreact/about" element={<About />} />
          <Route path="/ecomreact/product/productdetails" element={<ProductDetails />} />
          <Route path="/ecomreact/products" element={<Products />} />
          <Route path="/ecomreact/contactus" element={<Contactus />} />
          <Route path="/ecomreact/blog" element={<Blog />} />
          <Route path="/ecomreact/cart" element={<Cart />} />
          <Route path="/ecomreact/buy" element={<BuingMethod />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
