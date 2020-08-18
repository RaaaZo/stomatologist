import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 10vh;

  @media (min-width: 1024px) {
    display: fixed;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

const StyledListIem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.white};
  padding: 30px;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  -webkit-text-stroke: 0.8px black;

  &.activeLink {
    color: #ff5252;
    -webkit-text-stroke: 0.2px black;
  }
`;

const StyledLogo = styled.h3`
  width: 20%;
  margin-left: 40px;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLogo>logo</StyledLogo>
      <StyledList>
        <StyledListIem exact as={NavLink} to="/" activeClassName="activeLink">
          Home
        </StyledListIem>
        <StyledListIem
          exact
          as={NavLink}
          to="/services"
          activeClassName="activeLink"
        >
          Usługi
        </StyledListIem>
        <StyledListIem
          exact
          as={NavLink}
          to="/contact"
          activeClassName="activeLink"
        >
          Kontakt
        </StyledListIem>
      </StyledList>
    </Wrapper>
  );
};

export default Navigation;
