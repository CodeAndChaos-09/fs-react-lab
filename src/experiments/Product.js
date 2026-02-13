import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Product.css";

const allProducts = [
  { id: 1, name: "Pizza", price: 299, category: "Food", inStock: true, emoji: "🍕" },
  { id: 2, name: "Burger", price: 149, category: "Food", inStock: true, emoji: "🍔" },
  { id: 3, name: "Ice Cream", price: 99, category: "Food", inStock: false, emoji: "🍨" },

  { id: 4, name: "T-Shirt", price: 499, category: "Clothes", inStock: true, emoji: "👕" },
  { id: 5, name: "Jeans", price: 1299, category: "Clothes", inStock: false, emoji: "👖" },
  { id: 6, name: "Jacket", price: 2499, category: "Clothes", inStock: true, emoji: "🧥" },

  { id: 7, name: "Smartphone", price: 19999, category: "Electronics", inStock: true, emoji: "📱" },
  { id: 8, name: "Headphones", price: 1999, category: "Electronics", inStock: true, emoji: "🎧" },
  { id: 9, name: "Laptop", price: 59999, category: "Electronics", inStock: false, emoji: "💻" },
];

export default function Product() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Food", "Clothes", "Electronics"];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryCount = (category) => {
    if (category === "All") return allProducts.length;
    return allProducts.filter(p => p.category === category).length;
  };

  return (
    <div className="product-page">
      <h1>🛍️ Product Catalog</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Category Filters */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} ({getCategoryCount(cat)})
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No products found 😢</p>
        )}
      </div>
    </div>
  );
}
