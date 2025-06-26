import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingsPage from "./pages/ListingsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
