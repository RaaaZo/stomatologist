import React from "react";
import styled from "styled-components";

import { ReactComponent as DoctorSvg } from "assets/svg/doctor.svg";

const StyledSvg = styled(DoctorSvg)`
  width: 250px;
  height: 100%;

  @media (min-width: 660px) and (orientation: landscape) {
    order: 1;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 600px;
  }
`;

const HomeAnimation = () => {
  return (
    <>
      <StyledSvg />
    </>
  );
};

export default HomeAnimation;
