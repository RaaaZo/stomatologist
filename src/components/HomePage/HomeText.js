import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledButtons } from "components/ServicesPage/ServicesButtons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;

  @media (min-width: 660px) and (orientation: landscape) {
    width: 60%;
    order: 2;
  }

  @media (min-width: 1024px) {
    margin: 20px 10px;
  }

  @media (min-width: 1440px) {
    margin: 40px 10px;
  }
`;

const StyledParagraph = styled.p`
  margin: 5% 10%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: justify;
  text-align-last: center;

  @media (min-width: 768px) {
    max-width: 60%;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1440px) {
    max-width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1800px) {
    max-width: 80%;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const HomeText = ({ children }) => {
  return (
    <Wrapper>
      <StyledParagraph>{children}</StyledParagraph>
      <StyledButtons
        as={Link}
        to="/services"
        toService="true"
        homeButton="true"
      >
        Zobacz nasze usługi
      </StyledButtons>
    </Wrapper>
  );
};

HomeText.propTypes = {
  children: PropTypes.string.isRequired
};

export default HomeText;
