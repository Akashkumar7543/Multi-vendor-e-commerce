import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";

import { useState } from 'react';
import Chatbot from './components/chatbot/Chatbot';
import "./components/core/Styles.css";

import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Vendors from "./pages/Vendors";

import { useSelector } from "react-redux";
// import Product from "./components/core/HomePage/Product";
import MainLayout from "./vendordhashboard/components/MainLayout";

import Addproductt from "./vendordhashboard/pages/Addproductt";
// import AddCoupon from "./vendordhashboard/pages/AddCoupon";
import Cart from "./Component/Cart.js";
import Newarivail from "./pages/Newarivail";
import Ourproduct from "./components/core/HomePage/Ourproduct.js";




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const {token} = useSelector( (state) => state.auth );

  return (
    
    
  
    
    <div className="flex flex-col">
       
      {/* <Router> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/home" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="verify-email" element = <VerifyEmail /> />
        <Route path="/ecommerce" element = { <Home /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element = { <Orders /> } />
        <Route path="/vendors" element = { <Vendors /> } />
        <Route path="/customers" element = { <Customers /> } />
        <Route path="/newarival" element = { <Newarivail/> } />
        <Route path="/ourprodut" element = { <Ourproduct/> } />

        <Route path="/admin" element = { <MainLayout /> } />
        {/* <Route path="/products" element = { <ProductList /> } /> */}
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="/admin/product" element={<Addproductt/>} />
        {/* <Route path="enquiries" element={<Enquiries />} /> */}
        {/* <Route path="/admin/coupon" element={<AddCoupon />} /> */}
        
        {/* <Route path="/vendorDashboard" element={<vendorDashboard />} /> */}
        
        
        <Route path="/dashboard" element = {
          (
            token !== null && <Dashboard/>
          )
        } />
      </Routes>
      {/* </Router> */}
      <div>
        <Chatbot />
      </div>
    </div>
    
    
  );
}

export default App;