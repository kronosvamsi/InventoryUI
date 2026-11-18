import { useState } from "react";
import "../AddProductForm.css";
import { createProduct } from "../services/productService";
function AddProductForm({ onCancel, onProductCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    sku: "",
    price: "",
    initial_quantity: 0,
    reorder_level: 10,
  });
  const [error, setError] = useState(null);
  const [submitting, setSubmit] = useState(false);

  function updateFormField(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError(null);
      setSubmit(true);
      const payload = {
        ...formData,
        category_id: Number(formData.category_id),
        initial_quantity: Number(formData.initial_quantity),
        reorder_level: Number(formData.reorder_level),
      };

      let response = await createProduct(payload);

      await onProductCreated();
      onCancel();
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmit(false);
    }

    // console.log("formData :", formData);
  }

  return (
    <div className="add-product-container">
      {error && <p> Error occured {error}</p>}
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-field">
          <label htmlFor="prod_name">Product Name</label>
          <input
            onChange={updateFormField}
            type="text"
            name="name"
            id="prod_name"
            value={formData.name}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="prod_category">Product Category</label>
          <input
            onChange={updateFormField}
            type="number"
            min={1}
            step={1}
            name="category_id"
            id="prod_category"
            value={formData.category_id}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="prod_sku">Product SKU</label>
          <input
            onChange={updateFormField}
            type="text"
            name="sku"
            id="prod_sku"
            value={formData.sku}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="prod_price">Product Price</label>
          <input
            onChange={updateFormField}
            type="number"
            name="price"
            id="prod_price"
            min={0.01}
            step={0.01}
            value={formData.price}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="prod_initial_quantity">Initial Quantity</label>
          <input
            onChange={updateFormField}
            type="number"
            name="initial_quantity"
            id="prod_initial_quantity"
            min={0}
            value={formData.initial_quantity}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="prod_reorder_level"> Reorder Level</label>
          <input
            onChange={updateFormField}
            type="number"
            name="reorder_level"
            id="prod_reorder_level"
            min={0}
            value={formData.reorder_level}
            required
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
