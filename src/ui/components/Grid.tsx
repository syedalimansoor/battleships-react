import { GRID_SIZE } from "src/domain/constants";
import { PlayerIndex, Ship } from "src/domain/game";
import styled from "styled-components";
import { useFleet, useGrid } from "../stores/game";
import Square from "./common/Square";
import { useSelectedShipId } from "../stores/selectedShipId";
import PlacingShip from "./ships/PlacingShip";

type Props = {
  playerIndex: PlayerIndex;
};

export default function Grid(props: Props) {
  const [grid] = useGrid(props.playerIndex);
  const [fleet] = useFleet(props.playerIndex);
  const [selectedShipId] = useSelectedShipId();

  let selectedShip: Ship | undefined;
  if (selectedShipId) {
    selectedShip = fleet.ships.find((ship) => ship.id === selectedShipId);
  }

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
        <ShipLayer>
          {selectedShip && <PlacingShip ship={selectedShip} />}
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
