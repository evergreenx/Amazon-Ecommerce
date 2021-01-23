import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
    <img src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt="logo" class="header__logo" />

    <div className="header__search">
      <input type="search" />

      <SearchIcon className="search__icon"/>
    </div>

    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionOne">Hello</span>

        <span className="header__optionOne">Sign in</span>
      </div>

      <div className="header__option">
      <span className="header__optionOne">Returns</span>

<span className="header__optionOne">& Order</span>
      </div>

      <div className="header__option">
      <span className="header__optionOne">Your</span>

        <span className="header__optionOne">Prime</span>
      </div>
    </div>
  </div>
    )
  ;
};


export default Header