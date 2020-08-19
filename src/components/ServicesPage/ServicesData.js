import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ServicesImg from "assets/images/services.jpg";
import ServicesImg1 from "assets/images/services1.jpg";
import ServicesImg2 from "assets/images/services2.jpg";

import { ServicesWrapper } from "./ServicesWrapper";
import { StyledImg } from "./StyledImg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import { StyledButtons } from "./ServicesButtons";
import ServicesAnimation from "./ServicesAnimation";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Usługa1",
    img: ServicesImg,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  },
  {
    id: 2,
    name: "Usługa2",
    img: ServicesImg1,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  },
  {
    id: 3,
    name: "Usługa3",
    img: ServicesImg2,
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a doloribus optio numquam totam. Quis facilis natus ipsum! Maiores repudiandae dolor dolorum natus exercitationem, itaque iusto perferendis illo non necessitatibus!"
  }
];

const ServicesData = ({ firstData, secondData, thirdData }) => {
  if (firstData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[0].id}>
        <StyledImg src={DUMMY_DATA[0].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[0].txt}</StyledParagraph>
        <StyledButtons
          as={Link}
          to={`/services/${DUMMY_DATA[0].name}`}
          toService
        >
          Zobacz więcej
        </StyledButtons>
      </ServicesWrapper>
    );
  }

  if (secondData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[1].id}>
        <StyledImg src={DUMMY_DATA[1].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[1].txt}</StyledParagraph>
        <StyledButtons
          as={Link}
          to={`/services/${DUMMY_DATA[1].name}`}
          toService
        >
          Zobacz więcej
        </StyledButtons>
      </ServicesWrapper>
    );
  }

  if (thirdData) {
    return (
      <ServicesWrapper key={DUMMY_DATA[2].id}>
        <StyledImg src={DUMMY_DATA[2].img} alt="zdjecie" />
        <StyledParagraph>{DUMMY_DATA[2].txt}</StyledParagraph>
        <StyledButtons
          as={Link}
          to={`/services/${DUMMY_DATA[2].name}`}
          toService
        >
          Zobacz więcej
        </StyledButtons>
      </ServicesWrapper>
    );
  }

  return (
    <>
      <ServicesAnimation />
    </>
  );
};

ServicesData.propTypes = {
  firstData: PropTypes.bool.isRequired,
  secondData: PropTypes.bool.isRequired,
  thirdData: PropTypes.bool.isRequired
};

export default ServicesData;
