import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import "./CheckoutPage.css";
export function CartItemDetails({ cartItem, loadCart }) {
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  const [updated, setUpdated] = useState(false);
const[quantity,setQuantity]=useState(cartItem.quantity);
  const update = () => {
    if (updated) {
      setUpdated(false);
    } else {
      setUpdated(true);
    }
  };
const updateValue=(event)=>{
setQuantity(event.target.value)
};
const updateQuantity=async () =>{
  if(updated){
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setUpdated(false)
  }
  else{
    setUpdated(true)
  }
}

const eventUpdate=async (event)=>{
if(event.key==='Enter'){
  updateQuantity();
}else if(event.key==='Escape'){
 setQuantity(cartItem.quantity);
 setUpdated(false);
}
}

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {updated ? (
              <input value={quantity} onChange={updateValue} className="product-quantity-input" type="text" onKeyDown={eventUpdate} />
            ) : (
              <span className="quantity-label">{quantity}</span>
            )}
          </span>
          <span className="update-quantity-link link-primary" onClick={update,updateQuantity} >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
