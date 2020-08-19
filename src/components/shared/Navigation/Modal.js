import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  transform: translateX(110%);
  transition: transform 0.4s 0.2s ease-in-out;
  z-index: 900;

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

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default Modal;
