import React, { useState } from "react";

import PageTitle from "components/shared/PageTitle/PageTitle";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";
import { StyledButtons } from "components/ServicesPage/ServicesButtons";
import { ButtonsWrapper } from "components/ServicesPage/ButtonsWrapper";
import ServicesData from "components/ServicesPage/ServicesData";

const Services = () => {
  const [firstData, setFirstData] = useState(false);
  const [secondData, setsecondData] = useState(false);
  const [thirdData, setthirdData] = useState(false);

  const handleFirstData = () => {
    setFirstData(true);
    setsecondData(false);
    setthirdData(false);
  };

  const handleSecondData = () => {
    setFirstData(false);
    setsecondData(true);
    setthirdData(false);
  };

  const handleThirdData = () => {
    setFirstData(false);
    setsecondData(false);
    setthirdData(true);
  };

  return (
    <PageWrapper>
      <PageTitle>Usługi</PageTitle>
      <ContentWrapper>
        <ButtonsWrapper>
          <StyledButtons onClick={handleFirstData}>lorem</StyledButtons>
          <StyledButtons onClick={handleSecondData}>ipsum</StyledButtons>
          <StyledButtons onClick={handleThirdData}>dos</StyledButtons>
        </ButtonsWrapper>
        <ServicesData
          firstData={firstData}
          secondData={secondData}
          thirdData={thirdData}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Services;
