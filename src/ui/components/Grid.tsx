import { GRID_SIZE } from "src/domain/constants";
import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import { useGrid } from "../stores/game";

type Props = {
  idx: PlayerIndex;
};

export default function Grid(props: Props) {
  const [grid] = useGrid(props.idx);

  return (
    <StyledGrid>
      {grid.map((squares) =>
        squares.map((square) => (
          <Square key={`${square.location.column}-${square.location.row}`} />
        ))
      )}
    </StyledGrid>
  );
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

const Square = styled.div`
  &:not(:nth-of-type(${GRID_SIZE}n + 1)) {
    border-left: 3px solid ${(p) => p.theme.color.blue5};
  }
  &:nth-of-type(n + ${GRID_SIZE + 1}) {
    border-top: 3px solid ${(p) => p.theme.color.blue5};
  }
`;
