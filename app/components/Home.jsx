"use client";
import { useState , useEffect} from "react";
import { generateStructuredData } from "../utils/seoHelpers";
import FilterSidebar from "./FilterSidebar";
import Footer from "./Footer";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import SidebarLayout from "./SidebarLayout";
import "./home.css";
import Image from "next/image";
import { arrow } from "../assets";
export default function Home({ products }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  console.log("products", products);

  const [isMobile, setIsMobile] = useState(false);


  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setIsMobile(true);
        setSidebarVisible(false); 
      } else {
        setIsMobile(false);
        setSidebarVisible(true); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      {" "}
      <Header />{" "}
      <div className="hero-section">
        <h1 className="hero-title">Discover our products</h1>
        <h4 className="hero-subtitle">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque.
          <br /> Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </h4>
      </div>
      <div className="recommended-section">
        <div className="filter-section">
          {products.length} Items
          <div className="toggle-sidebar" onClick={toggleSidebar}>
            <Image alt="arrow" src={arrow} width={20} height={10} />
            {isSidebarVisible ? "Hide Filters" : "Show Filters"}
          </div>
        </div>
        <div className="recommenr-items">
          <select className="Recommeneded-select" name="Recommeneded" id="">
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
