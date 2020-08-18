import React from "react";
import styled from "styled-components";

import BackgroundSvgNotebook from "assets/svg/menu-background-notebook.svg";
import BackgroundSvgMobile from "assets/svg/menu-background-mobile.svg";

const StyledSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${BackgroundSvgMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  @media (min-width: 650px) {
    background: url(${BackgroundSvgNotebook});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Background = () => {
  return (
    <>
      <StyledSvg />
    </>
  );
};

export default Background;
