import React from "react";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import styled from "styled-components";
import GoogleMap from "components/shared/GoogleMap/GoogleMap";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  background-color: rgba(250, 250, 246, 0.7);
  border-radius: 15px;
`;

const Contact = () => {
  return (
    <PageWrapper>
      <PageTitle>Kontakt</PageTitle>
      <ContentWrapper>
        <InfoWrapper>
          <StyledParagraph>Godziny otwarcia:</StyledParagraph>
          <StyledParagraph>Poniedziałek 15:00 - 20:00</StyledParagraph>
          <StyledParagraph>Wtorek 10:00 - 18:00</StyledParagraph>
          <StyledParagraph>Środa 15:00 - 20:00</StyledParagraph>
          <StyledParagraph>Czwartek 15:00 - 20:00</StyledParagraph>
          <StyledParagraph>Piątek 12:00 -18:00</StyledParagraph>
          <StyledParagraph>Telefon: 509-949-202</StyledParagraph>
          <StyledParagraph>
            E-mail: stomatolog@vitadent-kozanecki.pl
          </StyledParagraph>
          <StyledParagraph>Lokalizacja: Toruń ul. Fałata 17a/6</StyledParagraph>
        </InfoWrapper>
        <GoogleMap />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Contact;
