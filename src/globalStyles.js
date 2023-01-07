import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#4369B2';
export const tintPrimaryColor = '#6887C1';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    
  }

  body{
    background-color: ${primaryColor};
    

  }

  a{
    text-decoration: none;
    color: #000;
  }

  #root{
    position: relative;
    overflow-x: hidden;
    height: 100vh;
  }
`;

export default GlobalStyle;
