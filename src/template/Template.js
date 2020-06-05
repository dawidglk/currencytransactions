import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/theme";

const Template = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
