import React, { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarBox>
        <CloseBtn>
          <Button>
            <i className="fas fa-times" />
          </Button>
        </CloseBtn>
        <ul>
          <Title>Home</Title>
          <Title>About</Title>
          <Title>김치앤칩스</Title>
          <Subtitle>
            <Menu>국제개발 주요뉴스</Menu>
            <Menu>주목할만한 보고서</Menu>
            <Menu>김칩 아티클</Menu>
            <Menu>좋은글 함께 읽어요</Menu>
            <Menu>국제개발협력 행사</Menu>
            <Menu>문화답사기</Menu>
            <Menu>시청각자료</Menu>
          </Subtitle>
        </ul>
      </SidebarBox>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const SidebarBox = styled.div`
  position: fixed;
  right: 0;
  width: 480px;
  height: 100vh;
  padding: 30px 70px;
  background-color: white;
  box-shadow: -4px 4px 20px 4px rgba(0, 0, 0, 0.15);
`;

const CloseBtn = styled.div`
  ${({ theme }) => theme.displayFlex("flex-end", "center")};
  padding: 10px;
  margin-bottom: 30px;
`;

const Button = styled.div`
  text-align: right;

  i {
    font-size: 2rem;
  }
`;

const Title = styled.li`
  font-weight: 700;
  font-size: 1.1rem;
  padding: 10px 0;
`;

const Subtitle = styled.ul`
  padding-left: 15px;
`;

const Menu = styled.li`
  padding: 10px 0;
`;
export default Sidebar;
