import { GRID_SIZE } from "src/domain/constants";
import styled from "styled-components";

export default function Grid() {
  return <StyledGrid>Grid</StyledGrid>;
}

const StyledGrid = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px;
  padding: ${(p) => p.theme.padding.inline};

  display: grid;
  grid-template: repeat(${GRID_SIZE}, 1fr) / repeat(${GRID_SIZE}, 1fr);
`;
