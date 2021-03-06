import styled from "styled-components";

export const PageTitle = styled.h3`
  margin: 120px auto 10px auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.text};
  text-align: right;

  @media (min-width: 1024px) {
    margin-top: 14vh;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
