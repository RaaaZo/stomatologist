import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ServicesWrapper } from "./ServicesWrapper";
import { StyledImg } from "./StyledImg";
import { StyledParagraph } from "components/shared/StyledParagraph/StyledParagraph";
import { StyledButtons } from "./ServicesButtons";
import ServicesAnimation from "./ServicesAnimation";
import ServicesButtons from "components/ServicesPage/ServicesButtons";
import { ButtonsWrapper } from "components/ServicesPage/ButtonsWrapper";

const ServicesData = ({ data }) => {
  const [buttonId, setButtonId] = useState();

  const singleService = data.filter(item => item.id === buttonId);

  const scrollTo = () => {
    if (window.innerHeight > window.innerWidth) {
      window.scrollTo(0, 600);
    } else {
      window.scrollTo(0, 200);
    }
  };

  return (
    <>
      <ButtonsWrapper>
        <ServicesButtons
          scrollTo={scrollTo}
          setButtonId={setButtonId}
          data={data}
        />
      </ButtonsWrapper>

      {singleService.length === 0 ? (
        <ServicesAnimation />
      ) : (
        singleService.map(item => (
          <ServicesWrapper key={item.id}>
            <StyledImg src={item.img} alt="zdjecie" />
            <StyledParagraph>{item.shortDesc}</StyledParagraph>
            <StyledButtons as={Link} to={`/services/${item.name}`} toService>
              Zobacz więcej
            </StyledButtons>
          </ServicesWrapper>
        ))
      )}
    </>
  );
};

ServicesData.propTypes = {
  data: PropTypes.array.isRequired
};

export default ServicesData;
