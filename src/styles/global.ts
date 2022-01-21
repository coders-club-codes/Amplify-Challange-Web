import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #e4e6ec;
    width: 100%;
    font-family: sans-serif;
  }

  :root {
    --button-background-color: #367B92;
    --button-click: #367B92;
    --link-color: #367B92;
    --ion-color-primary-ting: #367B92;

    .Nav__nav___2Dx2Y {
      background-color: #e4e6ec;
    }
  }

  #root {
    background-color: #e4e6ec;
  }

  #app {
    display: flex;
    justify-content: center;
  }
`;
