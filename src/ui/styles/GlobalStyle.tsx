import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.blue5};
    font-family: ${(props) => props.theme.font.family.primary};
    color: ${(props) => props.theme.color.yellow5}
  }
  
  :root {
    font-size: ${(props) => props.theme.font.size.base};
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
