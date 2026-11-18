const BASE_URL = "http://127.0.0.1:8000";
async function getProducts() {
  let api_endpoint = `${BASE_URL}/api/products/`;
  let response = await fetch(api_endpoint);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching products data");
  }
}
async function createProduct(postData) {
  const api_endpoint = `${BASE_URL}/api/products/`;

  const response = await fetch(api_endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const message =
      typeof data.detail === "string"
        ? data.detail
        : JSON.stringify(data.detail || "Failed to create product");
    console.log("err msg ..", message);
    throw new Error(message);
  }
  const data = await response.json();

  return data;
}

export default getProducts;
export { createProduct };
