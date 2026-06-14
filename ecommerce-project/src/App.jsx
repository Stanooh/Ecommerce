import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFound } from "./pages/NotFound";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getCart=async()=>{
const response=await axios
      .get("/api/cart-items?expand=product");
      setCart(response.data);
    }
   getCart();
    
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
