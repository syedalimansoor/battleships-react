import { GRID_SIZE } from "src/domain/constants";
import { PlayerIndex, Square as SquareType } from "src/domain/game";
import styled from "styled-components";
import { getShip, setShip, useFleet, useGrid } from "../stores/game";
import Square from "./common/Square";
import { placeShip } from "src/domain/functions";
import AvailableShip from "./common/AvailableShip";

type Props = {
  playerIndex: PlayerIndex;
};

export default function Grid(props: Props) {
  const [grid] = useGrid(props.playerIndex);
  const [fleet] = useFleet(props.playerIndex);

  const createHandleSquareClick = (square: SquareType) => {
    const handleSquareClick = (): void => {
      if (fleet.selected) {
        const ship = getShip(props.playerIndex, fleet.selected);
        const newShip = placeShip(grid, square, ship);
        setShip(props.playerIndex, newShip);
      }
    };
    return handleSquareClick;
  };

  return (
    <StyledGrid>
      <SquareLayer>
        {grid.map((squares) =>
          squares.map((square) => (
            <Square
              key={`${square.location.column}-${square.location.row}`}
              handleClick={createHandleSquareClick(square)}
            />
          ))
        )}
      </SquareLayer>
      <ShipLayer></ShipLayer>
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

const SquareLayer = styled.div`
  display: contents;
`;

const ShipLayer = styled.div`
  display: contents;
`;
