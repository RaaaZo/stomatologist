import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}


body {
    font-family: 'Oswald', sans-serif;
    overflow-x: hidden;
    background-color: #FAFAF6;
}
`;

export default GlobalStyles;
