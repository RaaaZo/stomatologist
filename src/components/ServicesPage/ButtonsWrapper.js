import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  margin: 80px 0 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 660px) and (orientation: landscape) {
    margin: 140px 30px 25px 40px;
  }
`;
