import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%; //use "rem" as px
    height: 100vh;
  }

  body {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  
  input {
    outline: none;
  }
`;
