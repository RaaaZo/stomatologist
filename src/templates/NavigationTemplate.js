import React, { useState } from "react";
import MobileMenu from "components/shared/Navigation/MobileMenu";
import MobileModal from "components/shared/Navigation/MobileModal";
import Modal from "components/shared/Navigation/Modal";
import Navigation from "components/shared/Navigation/Navigation";

const NavigationTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation />
    </>
  );
};

export default NavigationTemplate;
