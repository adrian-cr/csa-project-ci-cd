import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productListFetch";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

export default function ListingsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setError("");
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
  addToCart(product);
  alert(`${product.name} has been added to your cart!`);
  };

  if (loading) return <div style={{ padding: "2rem" }}>Loading products...</div>;
  if (error) return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>New Arrivals!</h1>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </Grid>
    </div>
  );
}

/* STYLES */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  align-content: center;
  justify-items: center;
  margin-top: 2rem;
  padding: 0 5% 5%;
`;
