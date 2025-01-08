import React from "react";
import Button from "./Button";
import Image from "next/image";
import { heart } from "../assets";
const ProductCard = ({ product }) => {
  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      {" "}
      <img
        src={product.image}
        alt={`${product.title} - ${product.description}`}
        itemProp="image"
        className="product-image"
      />{" "}
      <h3 itemProp="name" className="product-title">
        {" "}
        {product.title}{" "}
      </h3>{" "}

      <div className="price-container">
      <p itemProp="price" className="product-price">
        {" "}
        {/* ${product.price}{" "} */}
        Sign in or Create an account to see pricing
      </p>{" "}
       <Image src={heart} width={20} height={20} />
      </div>
    
      {/* <Button className="add-to-cart-button">Add to Cart</Button>{" "} */}
    </article>
  );
};
export default ProductCard;
