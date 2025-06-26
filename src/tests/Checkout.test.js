import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutPage from "../pages/CheckoutPage";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockCart = [
  {
    id: 1,
    name: "Apple",
    price: 1.99,
    image: "apple.png",
    quantity: 2
  }
];

const mockContext = {
  cart: mockCart,
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
  getTotal: jest.fn()
};

test("renders checkout form and places order", async () => {
  render(
    <CartProvider value={mockContext}>
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    </CartProvider>
  );
  setTimeout(() => {
    waitFor(() => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  });

  userEvent.type(screen.getByLabelText(/Name/i), "John Doe");
  userEvent.type(screen.getByLabelText(/Address/i), "123 Main St");

  const placeOrderButton = screen.findByRole("button", {
    name: /Place Order/i
  });
  userEvent.click(placeOrderButton);

  expect(screen.findByText(/Thank you for your order/i)).toBeInTheDocument();

  }, 1500);
});
