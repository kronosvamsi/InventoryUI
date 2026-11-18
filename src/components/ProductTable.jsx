import "../ProductTable.css";
function ProductTable({ product_list }) {
  // function getStockStatus(product) {
  //   let classes = ["product-status"];
  //   let status = product.status.replaceAll(" ", "");
  //   if (status === "InStock") {
  //     classes.push("status-instock");
  //   } else if (status === "LowStock") {
  //     classes.push("status-lowstock");
  //   } else if (status === "OutofStock") {
  //     classes.push("status-outofstock");
  //   }

  //   return classes.join(" ");
  // }
  if (product_list.length == 0) {
    return <div> No Products Match !</div>;
  }
  return (
    <div className="table-container">
      <table className="product-table">
        <thead className="product-heading">
          <tr className="product-header">
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {product_list.map((product) => (
            <tr key={product.id}>
              <td className="product-text">{product.name}</td>
              <td className="product-text">{product.category_id}</td>
              <td className="product-text">
                {Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(product.price)}
              </td>
              <td className="product-text">{product.sku}</td>
              <td className="product-text">
                <span>
                  {Intl.DateTimeFormat("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(product.created_at))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
