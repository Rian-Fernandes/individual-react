import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c8a70d92332465.5e490718ed693.gif');
    background-size: cover; // Ajuste o tamanho da imagem conforme necessário
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
