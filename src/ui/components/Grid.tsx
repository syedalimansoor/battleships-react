import { GRID_SIZE } from "src/domain/constants";
import { PlayerIndex, Ship, Square as SquareType } from "src/domain/game";
import styled from "styled-components";
import { useFleet, useGrid } from "../stores/game";
import Square from "./common/Square";
import { placeShip } from "src/domain/functions";
import GridShip from "./common/GridShip";

type Props = {
  playerIndex: PlayerIndex;
};

export default function Grid(props: Props) {
  const [grid] = useGrid(props.playerIndex);
  const [fleet, setFleet] = useFleet(props.playerIndex);

  const handleSquareClick = (square: SquareType) => {
    if (fleet.selected) {
      const selectedShip = fleet.ships.find(
        (ship) => ship.id === fleet.selected
      ) as Ship;
      const newFleet = placeShip(grid, square, fleet, selectedShip);
      setFleet(newFleet);
    }
  };

  return (
    <GridWrapper>
      <StyledGrid>
        <SquareLayer>
          {grid.map((squares) =>
            squares.map((square) => (
              <Square
                square={square}
                key={`${square.location.column}-${square.location.row}`}
                onClick={handleSquareClick}
              />
            ))
          )}
        </SquareLayer>
        <ShipLayer>
          {fleet.ships
            .filter((ship) => fleet.placedShips.includes(ship.id))
            .map((ship) => (
              <GridShip key={ship.id} ship={ship} />
            ))}
        </ShipLayer>
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

const ShipLayer = styled.div`
  display: contents;
`;
