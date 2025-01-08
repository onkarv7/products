import React from "react";
import ProductCard from "./ProductCard";
const ProductGrid = ({ products }) => {
  return (
    <section className="product-grid">
      {" "}
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}{" "}
    </section>
  );
};
export default ProductGrid;
