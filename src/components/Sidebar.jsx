import { NavLink } from "react-router";
import "../Sidebar.css";

function Sidebar() {
  return (
    <div className="side-container">
      <nav className="side-Nav">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => {
                return `side-link ${isActive ? "side-active" : ""}`;
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return `side-link ${isActive ? "side-active" : ""}`;
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => {
                return `side-link ${isActive ? "side-active" : ""}`;
              }}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) => {
                return `side-link ${isActive ? "side-active" : ""}`;
              }}
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suppliers"
              className={({ isActive }) => {
                return `side-link ${isActive ? "side-active" : ""}`;
              }}
            >
              Suppliers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
