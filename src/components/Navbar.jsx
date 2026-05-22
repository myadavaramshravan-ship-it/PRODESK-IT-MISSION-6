import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>ShopZone🛍️</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </nav>
  );
}
