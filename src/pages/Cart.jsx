import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
  } = useContext(CartContext);

  const formatPrice = (value) =>
    Number(value).toFixed(2);

  const total = formatPrice(
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    )
  );

  return (
    <div className="page">
      <h1>Cart Items</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              width="100"
            />

            <div>
              <h2>{item.title}</h2>

              <p>
                ${formatPrice(item.price)}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h2>Total: ${total}</h2>

      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed To Checkout
          </button>
        </Link>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}