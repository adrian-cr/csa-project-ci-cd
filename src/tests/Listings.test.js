import { render, screen, waitFor } from "@testing-library/react";
import ListingsPage from "../pages/ListingsPage";
import { CartProvider } from "../context/CartContext";
import * as api from "../api/productListFetch";

jest.mock("../api/productListFetch");

const mockProducts = [
  { id: 1, name: "Apple", price: 1.99, image: "apple.png" },
  { id: 2, name: "Banana", price: 0.99, image: "banana.png" }
];

test("renders products from API", async () => {
  api.fetchProducts.mockResolvedValue(mockProducts);

  render(
    <CartProvider>
      <ListingsPage />
    </CartProvider>
  );

  // Wait for "Apple" to appear in the DOM
  const apple = await screen.findByText(/Apple/i);
  expect(apple).toBeInTheDocument();

  const banana = await screen.findByText(/Banana/i);
  expect(banana).toBeInTheDocument();
});
