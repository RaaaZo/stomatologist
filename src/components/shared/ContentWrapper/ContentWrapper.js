import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 660px) and (orientation: landscape) {
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin-top: 80px;
    margin-left: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1440px) and (orientation: landscape) {
    margin-top: 100px;
  }
`;
