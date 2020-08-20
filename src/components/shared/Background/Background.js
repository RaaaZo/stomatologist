import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap";

import { ReactComponent as TopSvg } from "assets/svg/top.svg";
import { ReactComponent as BottomSvg } from "assets/svg/bottom.svg";
import logo from "assets/images/logo.png";

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  z-index: -1;
`;

const StyledTopSvg = styled(TopSvg)`
  position: absolute;
  top: -5%;
  left: 0;

  @media (min-width: 660px) and (orientation: landscape) {
    top: -50%;
  }

  @media (min-width: 820px) {
    top: -5%;
  }

  @media (min-width: 1440px) {
    top: 0;
  }
`;

const StyledBottomSvg = styled(BottomSvg)`
  position: absolute;
  bottom: -35%;
  right: 0;

  @media (min-width: 660px) and (orientation: landscape) {
    right: -20%;
    bottom: -65%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    bottom: -20%;
  }

  @media (min-width: 816px) {
    bottom: -20%;
  }

  @media (min-width: 1024px) {
    bottom: -15%;
  }

  @media (min-width: 1440px) {
    right: 0;
    bottom: -5%;
  }
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 1%;
  left: 2%;
  width: 120px;
  height: 80px;
  padding: 0 10px;
  background-color: rgba(250, 250, 246, 50%);
  border-radius: 50%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Background = () => {
  gsap.registerPlugin(CSSPlugin);
  const smallElement = useRef(null);

  useEffect(() => {
    const [animationSmall] = smallElement.current.children;

    const firstSmall = animationSmall.querySelector("#first");
    const secondSmall = animationSmall.querySelector("#second");
    const thirdSmall = animationSmall.querySelector("#third");
    const fourthSmall = animationSmall.querySelector("#fourth");
    const fifthSmall = animationSmall.querySelector("#fifth");

    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(firstSmall, {
      scaleY: 0.6,
      duration: 5,
      reversed: true,
      yoyo: true,
      repeat: -1
    })
      .to(
        [secondSmall, fifthSmall],
        {
          scaleY: 0.7,
          duration: 4,
          reversed: true,
          yoyo: true,
          repeat: -1
        },
        "-=5"
      )
      .to(
        [thirdSmall, fourthSmall],
        { scaleY: 0.4, duration: 3, reversed: true, yoyo: true, repeat: -1 },
        "-=5"
      );
  }, []);

  return (
    <>
      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>

      <StyledBackground>
        <StyledTopSvg ref={smallElement} />
        <StyledBottomSvg />
      </StyledBackground>
    </>
  );
};

export default Background;
