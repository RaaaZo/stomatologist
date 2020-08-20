import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { CSSPlugin } from "gsap";

import { ReactComponent as InformationSvg } from "assets/svg/information.svg";
import gsap from "gsap/gsap-core";

const StyledInformationSvg = styled(InformationSvg)`
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
`;

const ServiceAnimation = () => {
  gsap.registerPlugin(CSSPlugin);
  const element = useRef(null);

  useEffect(() => {
    const [animation] = element.current.children;

    const background = animation.querySelector("#background");
    const woman = animation.querySelector("#woman");
    const bigMark = animation.querySelector("#big-mark");
    const smallMarks = animation.querySelector("#small-marks");

    const tl = gsap.timeline({
      defaults: {
        autoAlpha: 0
      }
    });

    tl.fromTo(
      background,
      { x: "+=100vh" },
      { x: 0, autoAlpha: 1, duration: 1.5, delay: 1.7 }
    )
      .fromTo(woman, { x: "+=100vh" }, { x: 0, autoAlpha: 1, duration: 1 })
      .fromTo(
        bigMark,
        { y: "-=100vh" },
        { y: 0, autoAlpha: 1, duration: 1.5, ease: "bounce.out" }
      )
      .fromTo(
        smallMarks,
        { y: "-=100vh" },
        { y: 0, autoAlpha: 1, duration: 1.5, ease: "bounce.out" }
      )
      .to(smallMarks.children, {
        rotateZ: 360,
        transformOrigin: "center",
        repeat: -1,
        repeatDelay: 2.5,
        stagger: 0.3,
        autoAlpha: 1,
        duration: 1.5
      });
  }, []);

  return <StyledInformationSvg ref={element} />;
};

export default ServiceAnimation;
