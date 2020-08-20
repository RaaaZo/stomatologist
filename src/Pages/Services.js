import React, { useContext } from "react";

import { PageTitle } from "components/shared/PageTitle/PageTitle";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";

import ServicesData from "components/ServicesPage/ServicesData";
import { DataContext } from "context/DataContext";

const Services = () => {
  const data = useContext(DataContext);

  return (
    <PageWrapper>
      <PageTitle>Usługi</PageTitle>
      <ContentWrapper>
        <ServicesData data={data} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Services;
