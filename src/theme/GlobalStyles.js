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
    width:100%;
    height:100%;
}
`;

export default GlobalStyles;
