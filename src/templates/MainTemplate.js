import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import GlobalStyles from "theme/GlobalStyles";
import { MainTheme } from "theme/MainTheme";
import Background from "components/shared/Background/Background";
import Footer from "components/shared/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={MainTheme}>
        <Background />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
