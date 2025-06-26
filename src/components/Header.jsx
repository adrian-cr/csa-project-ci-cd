import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderBar>
      <Link to="/">
      <Logo src="./images/logo.png"/>
      </Link>
      <Nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
          Cart
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </Link>
        <Link to="/checkout" className={location.pathname === "/checkout" ? "active" : ""}>
          Checkout
        </Link>
      </Nav>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #24292f;
  color: #48ecec;

  @media (max-width: 400px) {
    justify-content: center;
    Nav {
      width: 100%;
    }
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 0.5rem;

  @media (max-width: 400px) {
    margin-bottom: 0;
    width: 70%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;

  a {
    color: #3be8f1;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #71ffff;
      text-shadow: 0 0 2px #ffffff;
      transition: 0.3s;
    }

    &.active {
      color: white;
      text-shadow: 0 0 2px #ffffff;
      font-weight: 700;
    }
  }
`;
const CartBadge = styled.span`
  background: #ff196d;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 50%;
  margin-left: 0.3rem;
`;
