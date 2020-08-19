import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  transform: translateX(110%);
  background: linear-gradient(180deg, #3d6cb9 0%, #00d1ff 100%);
  box-shadow: -8px 0px 14px -1px rgba(0, 0, 0, 0.75);
  z-index: 990;
  transition: transform 1s 0.2s ease-in-out;

  @media (orientation: landscape) {
    transform: translateY(-110%);
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);

      @media (orientation: landscape) {
        transform: translateY(0);
      }
    `}
`;

const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavLinks = styled(NavLink)`
  margin-top: 30px;
  padding: 30px 40px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

const MobileModal = ({ isOpen, setIsOpen }) => {
  const modalHandler = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <LinksWrapper>
        <StyledNavLinks onClick={modalHandler} to="/">
          Home
        </StyledNavLinks>
        <StyledNavLinks onClick={modalHandler} to="/services">
          Usługi
        </StyledNavLinks>
        <StyledNavLinks onClick={modalHandler} to="/contact">
          Kontakt
        </StyledNavLinks>
      </LinksWrapper>
    </Modal>
  );
};

MobileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default MobileModal;
