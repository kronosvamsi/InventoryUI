import { Routes, Route } from "react-router";
import ProductsPage from "../pages/ProductsPage";
import CategoryPage from "../pages/CategoryPage";
import AppLayout from "../layouts/AppLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
