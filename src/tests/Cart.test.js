import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "../pages/CartPage";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import * as api from "../api/productListFetch";
import App from "../App";

jest.mock("../api/productListFetch");

const mockProducts = [
  { id: 1, name: "Apple", price: 1.99, image: "apple.png" },
];

test("adds product to cart and shows it", async () => {
  api.fetchProducts.mockResolvedValue(mockProducts);

  render(
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  );

  // Wait for products to appear
  const addToCartBtn = await screen.findByText(/Add to Cart/i);
  fireEvent.click(addToCartBtn);

  // Navigate to Cart page
  const cartLink = screen.getByRole("link", { name: /Cart/i });
  fireEvent.click(cartLink);

  // Assert product is in the cart
  expect(await screen.findByText(/Apple/i)).toBeInTheDocument();
  expect(screen.getAllByText(/\$1\.99/).length).toBeGreaterThanOrEqual(1);
});
