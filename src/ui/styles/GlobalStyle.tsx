import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.blue5}
  }
`;

export default GlobalStyle;
