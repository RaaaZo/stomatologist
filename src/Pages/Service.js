import React from "react";
import { Link, useParams } from "react-router-dom";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import { StyledImg } from "components/ServicesPage/StyledImg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import { ServicesWrapper } from "components/ServicesPage/ServicesWrapper";
import { StyledButtons } from "components/ServicesPage/ServicesButtons";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";

import ServicesImg from "assets/images/services.jpg";
import ServicesImg1 from "assets/images/services1.jpg";
import ServicesImg2 from "assets/images/services2.jpg";
import ServiceAnimation from "components/ServicePage/ServiceAnimation";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Usługa1",
    img: ServicesImg,
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum facilis earum suscipit. Quam quae magni nesciunt voluptatum vero adipisci ratione? Veritatis sed at amet ad qui impedit corrupti a dolor minima assumenda, suscipit, ut dicta modi voluptatum nisi ratione tempora mollitia eos magni rerum sunt. Voluptatum ipsum magni, culpa eligendi ullam odit voluptatibus. Esse nihil aut totam aliquam nesciunt quod!"
  },
  {
    id: 2,
    name: "Usługa2",
    img: ServicesImg1,
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum facilis earum suscipit. Quam quae magni nesciunt voluptatum vero adipisci ratione? Veritatis sed at amet ad qui impedit corrupti a dolor minima assumenda, suscipit, ut dicta modi voluptatum nisi ratione tempora mollitia eos magni rerum sunt. Voluptatum ipsum magni, culpa eligendi ullam odit voluptatibus. Esse nihil aut totam aliquam nesciunt quod!"
  },
  {
    id: 3,
    name: "Usługa3",
    img: ServicesImg2,
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum facilis earum suscipit. Quam quae magni nesciunt voluptatum vero adipisci ratione? Veritatis sed at amet ad qui impedit corrupti a dolor minima assumenda, suscipit, ut dicta modi voluptatum nisi ratione tempora mollitia eos magni rerum sunt. Voluptatum ipsum magni, culpa eligendi ullam odit voluptatibus. Esse nihil aut totam aliquam nesciunt quod!"
  }
];

const Service = () => {
  let { serviceName } = useParams();

  const serviceData = DUMMY_DATA.filter(item => item.name === serviceName);

  return (
    <PageWrapper>
      <PageTitle>{serviceData[0].name}</PageTitle>
      <ContentWrapper>
        <ServicesWrapper>
          <StyledImg src={serviceData[0].img} alt="zdjecie" />
          <StyledParagraph>{serviceData[0].txt}</StyledParagraph>
          <StyledButtons as={Link} to={`/services`} toService="true">
            Powrót
          </StyledButtons>
        </ServicesWrapper>
        <ServiceAnimation />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Service;
