import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
  }

  h1 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 10px 20px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
