import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Product from "./experiments/Product";
import Library from "./experiments/Library";
import ClassHierarchy from "./experiments/ClassHierarchy";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/library" element={<Library />} />
          <Route path="/hierarchy" element={<ClassHierarchy />} />
        </Routes>
      </div>
    </Router>
  );
}
