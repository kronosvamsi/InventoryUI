import { LuPackage } from "react-icons/lu";
import "../Card.css";
function Card({ product }) {
  return (
    <div className="Card-container">
      <div>
        <LuPackage size={40} color="#4F46E5" />
      </div>
      <div className="card-details">
        <h2> {product.name}</h2>
        <p>SKU : {product.sku}</p>
        <p>Price - {product.price}</p>
      </div>
    </div>
  );
}

export default Card;
