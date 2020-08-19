import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import logo from "assets/images/logo.png";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 10vh;
  background: linear-gradient(180deg, #43ccc1 0%, #50f2e5 100%);
  box-shadow: 0px 5px 25px 4px rgba(67, 204, 193, 1);

  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
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

  &.activeLink {
    color: ${({ theme }) => theme.text};
  }
`;

const StyledLink = styled(Link)`
  margin-left: 40px;
  height: 80%;
`;

const StyledLogo = styled.img`
  height: 100%;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <StyledLogo src={logo} alt="logo" />
      </StyledLink>
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
