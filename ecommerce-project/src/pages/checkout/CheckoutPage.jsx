import axios from "axios";
import { useState, useEffect } from "react";
import {OrderSummary }from './OrderSummary'
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutHeader.css";
import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
const [paymentSummary,setPaymentSummary]=useState(null);
  useEffect(() => {
const deliveryOptionsData=async ()=>{
const response=await axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOptions(response.data);
}
const paymentSummaryData=async()=>{
  const response= axios.get('/api/payment-summary');
  setPaymentSummary(response.data);
}
   deliveryOptionsData();
   paymentSummaryData();
  
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
       <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>

        <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
