import React from "react";

import ServicesImg from "assets/images/services.jpg";
import ServicesImg1 from "assets/images/services1.jpg";
import ServicesImg2 from "assets/images/services2.jpg";
import { ServicesWrapper } from "./ServicesWrapper";
import { StyledImg } from "./StyledImg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import { StyledButtons } from "./ServicesButtons";

import { ReactComponent as ChooseOneSvg } from "assets/svg/chooseOne.svg";
import styled from "styled-components";

const DUMMY_DATA = [
  {
    id: 1,
    img: ServicesImg,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  },
  {
    id: 2,
    img: ServicesImg1,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  },
  {
    id: 3,
    img: ServicesImg2,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  }
];

const StyledChooseOne = styled(ChooseOneSvg)`
  margin-left: 20px;
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

const ServicesData = ({ firstData, secondData, thirdData }) => {
  if (firstData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[0].id}>
        <StyledImg src={DUMMY_DATA[0].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[0].txt}</StyledParagraph>
        <StyledButtons toService>Zobacz więcej</StyledButtons>
      </ServicesWrapper>
    );
  }

  if (secondData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[1].id}>
        <StyledImg src={DUMMY_DATA[1].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[1].txt}</StyledParagraph>
        <StyledButtons toService>Zobacz więcej</StyledButtons>
      </ServicesWrapper>
    );
  }

  if (thirdData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[2].id}>
        <StyledImg src={DUMMY_DATA[2].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[2].txt}</StyledParagraph>
        <StyledButtons toService>Zobacz więcej</StyledButtons>
      </ServicesWrapper>
    );
  }

  return (
    <>
      <StyledChooseOne />
    </>
  );
};

export default ServicesData;
