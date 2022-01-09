import React from "react";
import HeaderNavStyled from "./HeaderNavStyled";

export default function HeaderNav() {
  return (
    <HeaderNavStyled>
      <li>
        <a href="#header">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#products">Products</a>
      </li>
    </HeaderNavStyled>
  );
}
