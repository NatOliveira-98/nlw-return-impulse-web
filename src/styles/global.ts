import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  /* BASE STYLE */
  body {
    background-color: #09090A;
    color: #F4F4F5;
  }

  body * {
    font: 400 1.6rem 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;