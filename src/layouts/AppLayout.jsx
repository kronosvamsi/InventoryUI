import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../AppLayout.css";

function AppLayout() {
  return (
    <div className="layout-container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
