import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <span className={product.inStock ? "stock in" : "stock out"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}
