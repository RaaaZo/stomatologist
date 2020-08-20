import React from "react";
import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";

const shaking = keyframes`
{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;

export const StyledButtons = styled.button`
  width: 100%;
  padding: 20px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.accentsColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s 0.1s linear, transform 0.3s 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.text};
    transform: scale(1.02);
  }

  @media (min-width: 660px) and (orientation: landscape) {
    padding: 20px 20px;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    padding: 25px 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 10px;
    padding: 25px 120px;
  }

  ${({ toService }) =>
    toService &&
    css`
      width: 60%;
      margin-bottom: 15px;
      text-align: center;
      text-decoration: none;

      @media (min-width: 1440px) {
        width: 50%;
        font-size: ${({ theme }) => theme.fontSize.s};
      }

      @media (min-width: 1800px) {
        width: 40%;
      }
    `}

  ${({ homeButton }) =>
    homeButton &&
    css`
      animation: ${shaking} 0.82s 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both 5;
    `}
`;

const ServicesButtons = ({ data, setButtonId, scrollTo }) => {
  return (
    <>
      {data.map(item => (
        <StyledButtons
          onClick={() => {
            setButtonId(item.id);
            scrollTo();
          }}
          key={item.id}
        >
          {item.name}
        </StyledButtons>
      ))}
    </>
  );
};

ServicesButtons.propTypes = {
  data: PropTypes.array.isRequired,
  setButtonId: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired
};

export default ServicesButtons;
