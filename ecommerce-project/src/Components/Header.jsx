 
import {NavLink} from 'react-router'

import cartIcon from '../assets/images/icons/cart-icon.png'
import logoWhite from '../assets/images/logo-white.png'
import mobileLogoWhite from '../assets/images/mobile-logo-white.png'
import { useSearchParams } from 'react-router'

import searchIcon  from '../assets/images/icons/search-icon.png'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import './Header.css';
 
 export function Header({cart}) {
 
let totalQuantity=0;

cart?.forEach((cartItem)=>{
  totalQuantity+=cartItem.quantity;
})

const navigate=useNavigate();
const [searchParams]=useSearchParams();
const searchText = searchParams.get('search');
const [search,setSearch]=useState(searchText || '');
  const updateSearchInput = (event) => {
    setSearch(event.target.value);
  };



const searchInput=()=>{
  navigate(`/?search=${search}`);
};

const key=(event)=>{
  if (event.key === "Enter") {
      searchInput();
}};


  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-NavLink">
          <img className="logo" src={logoWhite} />
          <img className="mobile-logo" src={mobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search"   value={search}
  onChange={updateSearchInput} onKeyDown={key}/>

        <button onClick={searchInput} className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-NavLink header-NavLink" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-NavLink header-NavLink" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
