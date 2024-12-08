import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Add or update product
  const handleSave = (product) => {
    if (currentProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
    setCurrentProduct(null);
  };

  // Delete a product
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Edit product
  const handleEdit = (product) => {
    setCurrentProduct(product);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Product Inventory</h1>
      <ProductForm
        onSave={handleSave}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
