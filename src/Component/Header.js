import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
    <img src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt="logo" class="header__logo" />

    <div className="header__search">
      <input type="search" className="header__searchInput" />

      <SearchIcon className="search__icon"/>
    </div>

    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionOne">Hello</span>

        <span className="header__optionTwo">Sign in</span>
      </div>

      <div className="header__option">
      <span className="header__optionOne">Returns</span>

<span className="header__optionTwo">& Order</span>
      </div>

      <div className="header__option">
      <span className="header__optionOne">Your</span>

        <span className="header__optionTwo">Prime</span>
      </div>


      <div className="header__optionBasket">
     

      <ShoppingBasketIcon/>
<span className="header__optionTwo header__basketCount">1</span>
      </div>

    </div>
  </div>
    )
  ;
};


export default Header