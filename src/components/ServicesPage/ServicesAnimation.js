import { ReactComponent as ChooseOneSvg } from "assets/svg/chooseOne.svg";

import React from "react";
import styled from "styled-components";

const StyledChooseOne = styled(ChooseOneSvg)`
  margin-left: 20px;
  width: 250px;
  height: 100%;

  @media (min-width: 660px) {
    margin: 0 auto;
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 600px;
    height: 650px;
  }

  @media (min-width: 1440px) {
    max-width: 1024px;
  }
`;

const ServicesAnimation = () => {
  return (
    <>
      <StyledChooseOne />
    </>
  );
};

export default ServicesAnimation;
