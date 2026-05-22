import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-page">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>${product.price}</h2>
      <button onClick={() => addToCart(product)}>
  Add To Cart
</button>
    </div>
  );
}