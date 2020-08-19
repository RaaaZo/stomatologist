import React from "react";
import styled from "styled-components";

import { ReactComponent as InformationSvg } from "assets/svg/information.svg";

const StyledInformationSvg = styled(InformationSvg)`
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
`;

const ServiceAnimation = () => {
  return <StyledInformationSvg />;
};

export default ServiceAnimation;
