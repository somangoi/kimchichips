import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <Logo>
        <img src="/image/logo.png" alt="logo" />
      </Logo>
      <i class="fas fa-bars"></i>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colorBackground};
  ${({ theme }) => theme.displayFlex("space-between", "center")};
`;

const Logo = styled.div`
  width: 130px;
  padding: 10px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
export default Nav;
