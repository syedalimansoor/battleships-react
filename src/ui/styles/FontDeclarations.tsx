import { createGlobalStyle } from "styled-components";

const FontDeclarations = createGlobalStyle`
  @font-face {
    font-family: "ChunkFive";
    src: local("ChunkFive"), url(src/ui/fonts/ChunkFive-Regular.otf) format("opentype");
  }

  @font-face {
    font-family: "Kollektif";
    src: local("Kollektif"), url(src/ui/fonts/Kollektif.ttf) format("truetype");
  }

  @font-face {
    font-family: "Kollektif";
    font-weight: bold;
    src: local("Kollektif"), url(src/ui/fonts/Kollektif-Bold.ttf) format("truetype");
  }
`;

export default FontDeclarations;
