import React from "react";
import styled from "styled-components";



export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Card>
  );
}

/* STYLES */
const Card = styled.div`
  border: 1px solid #ccc;
  width: 250px;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;
const ProductName = styled.h2`
  font-size: 1.1rem;
`;
const Price = styled.p`
  font-size: 1.4rem;
  color: #1bb7d6;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #227fe9;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 300ms;
  transition: padding 100ms;

  &:hover {
    background-color: #19cac7;
    font-weight: 600;
    padding: 0.5rem 1.2rem;

  }
`;
