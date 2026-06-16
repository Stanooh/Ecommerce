import axios from "axios";
import { useState, useEffect } from "react";
import {OrderSummary }from './OrderSummary'
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutHeader.css";
import "./CheckoutPage.css";

export function CheckoutPage({ cart,loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
const [paymentSummary,setPaymentSummary]=useState(null);
window.axios=axios;
  useEffect(() => {
const deliveryOptionsData=async ()=>{
const response=await axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOptions(response.data);
      
}

   deliveryOptionsData();
  
  
  }, []);
  useEffect(()=>{
const paymentData=async ()=>{
  const response= await axios.get('/api/payment-summary');
  setPaymentSummary(response.data);
}
paymentData();
  },[cart])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
       <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>

        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
