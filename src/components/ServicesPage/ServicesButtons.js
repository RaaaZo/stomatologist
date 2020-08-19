import styled, { css } from "styled-components";

export const StyledButtons = styled.button`
  width: 100%;
  padding: 20px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.accentsColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 660px) {
    padding: 20px 40px;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    padding: 25px 60px;
  }

  @media (min-width: 1440px) {
    padding: 15px 100px;
  }

  ${({ toService }) =>
    toService &&
    css`
      width: 60%;
      margin-bottom: 15px;

      @media (min-width: 660px) {
        width: 40%;
      }

      @media (min-width: 1440px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    `}
`;
