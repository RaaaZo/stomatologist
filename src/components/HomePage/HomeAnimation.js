import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as DoctorSvg } from "assets/svg/doctor.svg";
import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap";

const StyledSvg = styled(DoctorSvg)`
  width: 250px;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 660px) and (orientation: landscape) {
    order: 1;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 600px;
  }
`;

const HomeAnimation = () => {
  gsap.registerPlugin(CSSPlugin);
  const element = useRef(null);

  useEffect(() => {
    const [animation] = element.current.children;

    const background = animation.querySelector("#background");
    const woman = animation.querySelector("#woman");
    const man = animation.querySelector("#man");
    const flower = animation.querySelector("#flower");

    const tl = gsap.timeline({ defaults: { autoAlpha: 0 } });

    tl.fromTo(
      [background, flower],
      { y: "-=100vh" },
      { y: 0, autoAlpha: 1, duration: 2, ease: "bounce.out", delay: 0.5 }
    )
      .fromTo(woman, { x: "-=100vh" }, { x: 0, autoAlpha: 1, duration: 2 })
      .fromTo(
        man,
        { x: "+=100vh" },
        { x: 0, autoAlpha: 1, duration: 2 },
        "-=2"
      );
  }, []);

  return (
    <>
      <StyledSvg ref={element} />
    </>
  );
};

export default HomeAnimation;
