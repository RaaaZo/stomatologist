import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ChooseOneSvg } from "assets/svg/chooseOne.svg";
import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap";

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

const ServicesAnimation = () => {
  gsap.registerPlugin(CSSPlugin);
  const element = useRef(null);

  useEffect(() => {
    const [animation] = element.current.children;

    const selected = animation.querySelector("#selected");
    const circle = animation.querySelector("#circle");
    const notSelected = animation.querySelector("#notSelected");
    const stars = animation.querySelector("#stars");
    const man = animation.querySelector("#man");

    const tl = gsap.timeline({ defaults: { autoAlpha: 0 } });

    tl.fromTo(man, { y: "+=100vh" }, { y: 0, autoAlpha: 1, duration: 1.5 })
      .fromTo(
        notSelected,
        { x: "+=100vh" },
        { x: 0, autoAlpha: 1, duration: 1.5 }
      )
      .fromTo(selected, { x: "+=100vh" }, { x: 0, autoAlpha: 1, duration: 1.5 })
      .fromTo(
        [circle, stars],
        { scale: 0 },
        { scale: 1, autoAlpha: 1, duration: 1.5 },
        "-=1"
      )
      .to(stars.children, {
        rotateZ: 360,
        scale: 1.5,
        transformOrigin: "center",
        autoAlpha: 1,
        duration: 1,
        repeat: -1,
        stagger: 0.15,
        repeatDelay: 1.5
      });
  }, []);

  return (
    <>
      <StyledChooseOne ref={element} />
    </>
  );
};

export default ServicesAnimation;
