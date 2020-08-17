import React from "react";
import styled from "styled-components";

import BackgroundSvg from "assets/svg/menu-background.svg";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = () => {
  return <Wrapper></Wrapper>;
};

export default Background;
