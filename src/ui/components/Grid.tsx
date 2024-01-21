import { GRID_SIZE } from "src/domain/constants";
import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import { useGrid } from "../stores/game";
import Square from "./common/Square";

type Props = {
  playerIndex: PlayerIndex;
};

export default function Grid(props: Props) {
  const [grid] = useGrid(props.playerIndex);

  return (
    <GridWrapper>
      <StyledGrid>
        <SquareLayer>
          {grid.map((squares) =>
            squares.map((square) => (
              <Square
                square={square}
                key={`${square.location.column}-${square.location.row}`}
              />
            ))
          )}
        </SquareLayer>
      </StyledGrid>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px;
  padding: ${(p) => p.theme.padding.inline};
`;

const StyledGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: repeat(${GRID_SIZE}, 1fr) / repeat(${GRID_SIZE}, 1fr);
  position: relative;
`;

const SquareLayer = styled.div`
  display: contents;
`;
