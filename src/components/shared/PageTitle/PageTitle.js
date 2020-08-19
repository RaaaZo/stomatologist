import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.h3`
  margin-top: 80px;
  margin-right: 15%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.text};
  text-align: right;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const PageTitle = ({ children }) => {
  return (
    <>
      <StyledHeader>{children}</StyledHeader>
    </>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default PageTitle;
