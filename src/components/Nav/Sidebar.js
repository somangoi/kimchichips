import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarBox></SidebarBox>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
`;

const SidebarBox = styled.div`
  width: 480px;
  height: 100vh;
  background-color: white;
  box-shadow: -4px 4px 20px 4px rgba(0, 0, 0, 0.15);
`;
export default Sidebar;
