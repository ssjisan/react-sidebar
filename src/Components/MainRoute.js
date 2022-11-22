import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProducts from "../Pages/Products/AddProducts";
import AllProducts from "../Pages/Products/AllProducts";
import AddSalesman from "../Pages/Salesman/AddSalesman";
import AllSalesman from "../Pages/Salesman/AllSalesman";
import Zone from "../Pages/Zone/Zone";
// import Check from "../Pages/Check";
// import DailyLoad from "../Pages/DailyLoad";
// import Product from "../Pages/Product";
// import Report from "../Pages/Report";
// import Salesman from "../Pages/Salesman";
// import Zone from "../Pages/Zone";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/addProduct" element={<AddProducts />} />
      <Route path="/product/allProduct" element={<AllProducts />} />
      <Route path="/salesman/addSalesman" element={<AddSalesman />} />
      <Route path="/salesman/allSalesman" element={<AllSalesman />} />
      <Route path="/zone" element={<Zone />} />
    </Routes>
  );
}
