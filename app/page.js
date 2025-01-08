
import FilterSidebar from "./components/FilterSidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import { generateStructuredData } from "./utils/seoHelpers";

import SidebarLayout from "./components/SidebarLayout";
export default async function HomePage() {

  
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await response.json();
  console.log("products",products )
 const structuredData = generateStructuredData(products);
  return (
    <>
      {" "}
      <Header />{" "}


      <SidebarLayout>
        <FilterSidebar />
        <ProductGrid products={products} />
      </SidebarLayout>
      <Footer /> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />{" "}
    </>
  );
}
