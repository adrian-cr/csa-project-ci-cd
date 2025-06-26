import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <Wrapper>
        <EmptyMessage>Your cart is empty.</EmptyMessage>
        <p style={{ textAlign: "center" }}>
          <Link to="/">Browse products</Link>
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQty={updateQuantity}
          onRemove={removeFromCart}
        />
      ))}
      <Total>Total: ${getTotal().toFixed(2)}</Total>
      <p style={{ marginTop: "1rem" }}>
        <Link to="/checkout">
          <Button>Proceed to Checkout</Button>
        </Link>
      </p>
    </Wrapper>
  );
}

/* STYLES */
const Wrapper = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;
const Total = styled.div`
  margin-top: 1rem;
  font-size: 30px;
  font-weight: bold;
`;
const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #777;
`;

const Button = styled.button`
  background-color: #4373f9;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  min-height: 40px;
  min-width: 200px;
  padding: 5px 15px;
  &:hover {
    background-color: #28bbff;
    transition: 300ms;
  }
`;
