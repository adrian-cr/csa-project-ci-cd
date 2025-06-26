import React from "react";
import styled from "styled-components";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <ItemWrapper>
      <Image src={item.image} alt={item.name} />
      <Info>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <QuantityControl>
          <Button onClick={() => onUpdateQty(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</Button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              onUpdateQty(item.id, Math.max(1, parseInt(e.target.value || 1)))
            }
          />
          <Button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</Button>
        </QuantityControl>
      </Info>
      <Button className="remove" onClick={() => onRemove(item.id)} style={{ color: "red" }}>
        <img src="./images/remove_icon.svg"/>
      </Button>
    </ItemWrapper>
  );
}

/* STYLES */
const ItemWrapper = styled.div`
  background-color: #f0fbf9;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 30px;
  border-bottom: 5px solid #ffffff;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;

  h3 {
    margin-top: 0;
  }
  p {
    font-size: 20px;
  }
`;
const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 50px;
    padding: 0.3rem;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #4373f9;
  color: #fff;
  border: none;
  height: 25px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;

  &.remove {
    width: 40px;
    height: 40px;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &:not(:disabled):hover {
    background-color: #26cee4;
    color: #fff;
    transition: 300ms;
  }

  &.remove:hover {
    background-color: #fd5d54;
    transition: 300ms;
  }
`;
