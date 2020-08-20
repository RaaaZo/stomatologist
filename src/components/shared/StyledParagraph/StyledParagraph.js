import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 20px 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: justify;
  text-align-last: center;
  line-height: 2;

  @media (min-width: 768px) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
