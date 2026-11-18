import "../Navbar.css";
function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <p>Inventory Management System</p>
      </div>
      <div className="nav-right">
        <div className="nav-icon">icon</div>
        <div className="nav-profile"> User </div>
      </div>
    </div>
  );
}

export default Navbar;
