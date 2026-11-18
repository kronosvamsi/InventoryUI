import { useState, useEffect } from "react";
import "../ProductPage.css";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";
import getProducts from "../services/productService";
import AddProductForm from "../components/AddProductForm";
// const sample_products = [
//   {
//     id: 1,
//     name: "Laptop",
//     category: "Electronics",
//     price: "550$",
//     quantity: 20,
//     status: "In Stock",
//   },
//   {
//     id: 2,
//     name: "Keyboard",
//     category: "Accessories",
//     price: "150$",
//     quantity: 45,
//     status: "In Stock",
//   },
//   {
//     id: 3,
//     name: "Monitor",
//     category: "Electronics",
//     price: "120$",
//     quantity: 0,
//     status: "Out of Stock",
//   },
//   {
//     id: 4,
//     name: "Mouse",
//     category: "Accessories",
//     price: "20$",
//     quantity: 5,
//     status: "Low Stock",
//   },
// ];
function ProductsPage() {
  const [search, updateSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [productData, updateProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addProduct, setAddProduct] = useState(false);

  let callProducts = async () => {
    setError(null);
    try {
      let res = await getProducts();
      updateProductData(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    callProducts();
    // console.log(productData);
  }, []);
  function handleAddProduct() {
    // console.log("Add Product Clicked !");
    setAddProduct(true);
  }
  function handleSearchInput(e) {
    updateSearch(e.target.value);
  }
  function handleSearch() {
    setAppliedSearch(search);
  }
  function handleCloseForm() {
    setAddProduct(false);
  }
  const filterProducts = productData.filter((product) => {
    const query = appliedSearch.trim().toLowerCase();
    const productName = product.name.toLowerCase();

    return (
      productName.includes(query) || product.sku.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {loading === true ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Error {error}</p>
      ) : (
        <div className="product-container">
          <div className="page-header">
            <PageHeader
              title={"Products"}
              description={"Manage the products"}
              buttonLabel={"Add the Product"}
              onButtonClick={handleAddProduct}
            />
          </div>
          <div>
            {addProduct && (
              <AddProductForm
                onCancel={handleCloseForm}
                onProductCreated={callProducts}
              />
            )}
          </div>
          <div className="search-bar">
            <SearchBar
              search_input={search}
              handleSearchInputChange={handleSearchInput}
              handleSearch={handleSearch}
            />
          </div>
          <ProductTable product_list={filterProducts} />
        </div>
      )}
    </div>
  );
}
export default ProductsPage;
