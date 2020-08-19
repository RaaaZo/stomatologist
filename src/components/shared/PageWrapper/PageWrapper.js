import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px 30px 20px;

  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;
