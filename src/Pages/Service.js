import React, { useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import { StyledImg } from "components/ServicesPage/StyledImg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import { ServicesWrapper } from "components/ServicesPage/ServicesWrapper";
import { StyledButtons } from "components/ServicesPage/ServicesButtons";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";

import ServiceAnimation from "components/ServicePage/ServiceAnimation";
import { DataContext } from "context/DataContext";

const Service = () => {
  const data = useContext(DataContext);
  let { serviceName } = useParams();

  const serviceData = data.filter(item => item.name === serviceName);

  return (
    <PageWrapper>
      {serviceData.map(item => (
        <Fragment key={item.id}>
          <PageTitle>{item.name}</PageTitle>
          <ContentWrapper>
            <ServicesWrapper>
              <StyledImg src={item.img} alt="zdjecie" />
              <StyledParagraph>{item.longDesc}</StyledParagraph>
              <StyledButtons as={Link} to={`/services`} toService="true">
                Powrót
              </StyledButtons>
            </ServicesWrapper>
            <ServiceAnimation />
          </ContentWrapper>
        </Fragment>
      ))}
    </PageWrapper>
  );
};

export default Service;
