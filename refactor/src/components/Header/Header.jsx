import React from "react";
import "components/Header/header.css";
import Button from "components/UI/Button";
import styled from "styled-components";
import HeaderNav from "./HeaderNav/HeaderNav";

const logo = require("components/Header/logo.png");

const InvertButton = styled(Button)`
  margin: 0px 20px;
  &:hover {
    background-color: #ef7998;
    color: white;
    border-color: #ef7998;
  }
`;

function Header() {
  return (
    <div id="header" className="header">
      <img src={logo} alt="logo" />
      <HeaderNav />
      <span className="header-right-side"> +123 456 789</span>
      <InvertButton className="cart-toggle">cart button</InvertButton>
    </div>
  );
}

export default Header;
