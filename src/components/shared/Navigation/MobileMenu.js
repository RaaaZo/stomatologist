import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.text};
  z-index: 999;
  transition: border 0.6s linear;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      border: 2px solid ${({ theme }) => theme.white};
      }
    `}
`;

const HamburgerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 3px;
  background-color: ${({ theme }) => theme.text};
  transition: background-color 0.6s linear;
  z-index: 999;

  &::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    transition: background-color 0.6s linear;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    transition: background-color 0.6s linear;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${({ theme }) => theme.white};
      &::before {
        content: "";
        background-color: ${({ theme }) => theme.white};
      }
      &::after {
        content: "";
        background-color: ${({ theme }) => theme.white};
      }
    `}
`;

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <HamburgerWrapper>
        <HamburgerMenu isOpen={isOpen} />
      </HamburgerWrapper>
    </Wrapper>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default MobileMenu;
