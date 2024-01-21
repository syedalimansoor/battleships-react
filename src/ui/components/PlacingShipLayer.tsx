import { PlayerIndex, Ship } from "src/domain/game";
import { useFleet } from "../stores/game";
import { useSelectedShipId } from "../stores/selectedShipId";
import PlacingShip from "./ships/PlacingShip";
import {
  ShipLocation,
  usePlacingShipLocation,
} from "../stores/placingShipLocation";
import { useDrop } from "react-dnd";
import { DndTypes } from "../constants";
import styled from "styled-components";

type Props = {
  playerIndex: PlayerIndex;
};

export default function PlacingShipLayer(props: Props) {
  const [fleet] = useFleet(props.playerIndex);
  const [selectedShipId] = useSelectedShipId();

  const [placingShipLocation, setPlacingShipLocation] =
    usePlacingShipLocation();

  const moveShip = (newLocation: ShipLocation) => {
    setPlacingShipLocation(newLocation);
  };

  const [, drop] = useDrop<ShipLocation>(() => ({
    accept: DndTypes.Ship,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset() as ShipLocation;

      const newLocation = {
        x: Math.round(item.x + delta.x),
        y: Math.round(item.y + delta.y),
      };
      moveShip(newLocation);
    },
  }));

  let selectedShip: Ship | undefined;
  if (selectedShipId) {
    selectedShip = fleet.ships.find((ship) => ship.id === selectedShipId);
  }

  return (
    <StyledLayer ref={drop}>
      {selectedShip && (
        <PlacingShip ship={selectedShip} location={placingShipLocation} />
      )}
    </StyledLayer>
  );
}

const StyledLayer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  position: relative;
`;
