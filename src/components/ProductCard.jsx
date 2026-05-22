import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function ProductCard({
  product,
}) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}
        className="details-link">
        View Details 
      </Link>
      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}