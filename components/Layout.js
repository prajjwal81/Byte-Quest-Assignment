import React from "react";
import Bags from "./BagsAndTheirLogo";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

function Layout() {
  return (
    <div style={{ maxWidth: "1800px", margin: "0 auto" }}>
      <Navbar />
      <Bags />
      <ProductCard />
    </div>
  );
}

export default Layout;
