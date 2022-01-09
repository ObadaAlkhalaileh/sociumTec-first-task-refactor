import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  padding: 10px;
  background-color: transparent;
  border: solid black 1px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: #ef7998;
    transition: all 0.25s;
  }
`;

export default Button;
