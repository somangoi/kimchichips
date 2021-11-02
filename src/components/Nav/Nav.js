import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <Logo>
        <img src="/image/logo.png" alt="logo" />
      </Logo>
      <Menu>
        <i class="fas fa-bars" />
      </Menu>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${({ theme }) => theme.displayFlex("space-between", "center")};
  width: 100%;
  background-color: ${({ theme }) => theme.colorBackground};
`;

const Logo = styled.div`
  width: 140px;
  padding: 10px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.div`
  padding-right: 20px;
`;
export default Nav;