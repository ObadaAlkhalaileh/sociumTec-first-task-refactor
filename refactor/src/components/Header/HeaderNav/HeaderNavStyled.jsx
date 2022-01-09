import styled from "styled-components";

const HeaderNavStyled = styled.ul`
  flex-grow: 1;
  display: flex;
  list-style-type: none;
  display: flex;
  justify-content: center;
  & li {
    padding: 0 0.5rem;
    font-size: 1.5rem;
  }
  & li a {
    text-decoration: none;
    color: #ef7998;
  }
  & li a:hover {
    color: black;
    transition: all 0.5s;
  }
`;

export default HeaderNavStyled;
