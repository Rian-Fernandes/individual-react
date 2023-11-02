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
    background-image: url('https://img.freepik.com/vetores-gratis/fundo-roxo-do-ceu-nublado-com-grupo-de-cumulos-e-nuvens-cirros-ilustracao-plana-dos-desenhos-animados_1284-62768.jpg?w=900&t=st=1698942788~exp=1698943388~hmac=d246cd853b38d563c397b49fc050b7dc034e3310003e5b7c23d8cbbd535a52d0');
    background-size: cover; // Ajuste o tamanho da imagem conforme necessário
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
