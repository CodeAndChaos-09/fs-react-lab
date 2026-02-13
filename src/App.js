import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./experiments/Product";
import Library from "./experiments/Library";
import ClassHierarchy from "./experiments/ClassHierarchy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/library" element={<Library />} />
          <Route path="/class-hierarchy" element={<ClassHierarchy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
