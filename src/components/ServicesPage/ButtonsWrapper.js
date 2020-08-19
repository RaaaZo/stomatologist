import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 660px) and (orientation: portrait) {
    margin-top: 140px;
  }
`;
