import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
from {
  transform: translateX(100%);
  opacity: 0;
}

to{
  transform: translateX(0);
  opacity:1;
}
`;

export const ServicesWrapper = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.accentsColor};
  background: ${({ theme }) => theme.white};
  animation: ${fadeInAnimation} 2s;

  @media (min-width: 660px) and (orientation: landscape) {
    margin-left: 20px;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin-left: 60px;
  }
`;
