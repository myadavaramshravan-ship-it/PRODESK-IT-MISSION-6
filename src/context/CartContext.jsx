import {
  createContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext();

export default function CartProvider({
  children,
}) {
  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => [
      ...prevCart,
      product,
    ]);
  }

  function removeFromCart(id) {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.id !== id
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}