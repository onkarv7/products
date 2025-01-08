"use client";
import { useState } from "react";
import { generateStructuredData } from "../utils/seoHelpers";
import FilterSidebar from "./FilterSidebar";
import Footer from "./Footer";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import SidebarLayout from "./SidebarLayout";
import "./sidebar.css";
export default function Home({ products }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  console.log("products", products);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {" "}
      <Header />{" "}
      <div className="recommended-section">
        <div className="filter-section">
          {products.length} Items
          <div onClick={toggleSidebar}>
            {isSidebarVisible ? "< Hide Filters" : "< Show Filters"}
          </div>
        </div>
        <div className="recommenr-items">
          <select name="Recommeneded" id="">
            <option value="">Recommeneded</option>
            <option value="">Newest First</option>
            <option value="">Popular</option>
            <option value="">Price : High To Low</option>
            <option value="">Price : Low To High</option>
          </select>
        </div>

   
      </div>
      <SidebarLayout isSidebarVisible={isSidebarVisible}>
        <FilterSidebar />
        <ProductGrid products={products} />
      </SidebarLayout>
      <Footer />
    </>
  );
}
