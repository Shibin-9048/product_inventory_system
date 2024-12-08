import React, { useState, useEffect } from "react";

const ProductForm = ({ onSave, currentProduct, setCurrentProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (currentProduct) setProduct(currentProduct);
    else resetForm();
  }, [currentProduct]);

  const resetForm = () => {
    setProduct({ name: "", category: "", price: "", stock: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.category || !product.price || !product.stock) {
      alert("Please fill all required fields.");
      return;
    }
    onSave(product);
    resetForm();
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            name="stock"
            placeholder="Stock Quantity"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-10 mt-2">
          <textarea
            className="form-control"
            name="description"
            placeholder="Description (optional)"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2 mt-2">
          <button type="submit" className="btn btn-primary w-100">
            {currentProduct ? "Update" : "Add"}
          </button>
        </div>
        {currentProduct && (
          <div className="col-md-2 mt-2">
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => setCurrentProduct(null)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
