import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function Product() {
  const productsData = [
    { id: 1, name: "Laptop", brand: "HP", price: 60000, category: "Electronics" },
    { id: 2, name: "Phone", brand: "Samsung", price: 30000, category: "Electronics" },
    { id: 3, name: "Shoes", brand: "Nike", price: 5000, category: "Fashion" },
    { id: 4, name: "Watch", brand: "Titan", price: 7000, category: "Accessories" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="page">
      <h2>Product Management</h2>

      {/* Category Buttons */}
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
