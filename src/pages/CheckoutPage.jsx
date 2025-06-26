import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function CheckoutPage() {
  const { cart, getTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      setError("Please fill in all required fields.");
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate("/confirmation", { state: { name: form.name } });
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <Wrapper>
        <p>Your cart is empty.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Checkout</h1>

      <div>
        <h3>Review Your Items:</h3>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQty={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
        <p><strong>Total:</strong> ${getTotal().toFixed(2)}</p>
      </div>

      <Form onSubmit={handleSubmit}>
        <h3>Shipping Info</h3>
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="john@example.com"
          required
        />

        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main Street"
          rows={3}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button type="submit">Place Order</Button>
      </Form>
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
const Form = styled.form`
  align-items: center;
  background-color: #efefef;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  max-width: 500px;
  margin-top: 2rem;
  min-width: 100%;
  padding: 30px;

  * {
    max-width: 400px;
  }

  h3 {
    font-size: 25px;
  }

  label {
    display: block;
    margin-top: 1rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.25rem;
  }

  button {
    margin-top: 1.5rem;
  }
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
