import React from "react";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";
import { ServicesWrapper } from "components/ServicesPage/ServicesWrapper";
import HomeText from "components/HomePage/HomeText";
import { ReactComponent as Location } from "assets/svg/location.svg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import styled from "styled-components";

const StyledLocation = styled(Location)`
  border: 2px solid ${({ theme }) => theme.accentsColor};
  margin: 0 auto;
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

const Contact = () => {
  return (
    <PageWrapper>
      <PageTitle>Kontakt</PageTitle>
      <ContentWrapper>
        <StyledLocation />

        <StyledParagraph>
          Godziny otwarcia: 8.00-18.00.
          <StyledParagraph>Telefon: 123456789.</StyledParagraph>
          <StyledParagraph>E-mail: test@test.com.</StyledParagraph>
          <StyledParagraph>Lokalizacja: toruń ul. jakaśtam.</StyledParagraph>
        </StyledParagraph>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Contact;
