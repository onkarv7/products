import React from "react";
import Button from "./Button";
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
      <p itemProp="price" className="product-price">
        {" "}
        ${product.price}{" "}
      </p>{" "}
      <Button className="add-to-cart-button">Add to Cart</Button>{" "}
    </article>
  );
};
export default ProductCard;
