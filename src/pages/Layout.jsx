import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

import Footer from "../components/Footer";
const Layout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </div>
  );
};

export default Layout;
