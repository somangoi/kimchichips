import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Nav() {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  return (
    <>
      <NavContainer>
        <Logo>
          <img src="/image/logo.png" alt="logo" />
        </Logo>
        <Menu onClick={sidebarOpen}>
          <i class="fas fa-bars" />
        </Menu>
      </NavContainer>
      {isSidebarShown && (
        <Sidebar isSidebarShown={isSidebarShown} sidebarOpen={sidebarOpen} />
      )}
    </>
  );
}

const NavContainer = styled.div`
  ${({ theme }) => theme.displayFlex("space-between", "center")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
  padding: 0 20px;
  i {
    font-size: 120%;
  }
`;
export default Nav;
