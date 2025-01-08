import React from "react";
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
        <Image alt="heart" src={heart} width={20} height={20} />
      </div>
    </article>
  );
};
export default ProductCard;
