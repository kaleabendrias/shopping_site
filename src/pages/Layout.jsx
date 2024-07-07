import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShopAdd from "../components/ShopAdd";
import NewDeals from "../components/NewDeals";
import Popular from "../components/Popular";
import PsCard from "../components/PsCard";
import AllProducts from "../components/AllProducts";
import Comfy from "../components/Comfy";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <ShopAdd />
      <NewDeals />
      <Popular />
      <PsCard />
      <AllProducts />
      <Comfy />
    </div>
  );
};

export default Layout;
