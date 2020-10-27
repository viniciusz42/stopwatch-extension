import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    list-style: none;
  }
  *,
  ::after,
  ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:focus, *:active {
    outline: none;
  }
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 280px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
  }
`;
