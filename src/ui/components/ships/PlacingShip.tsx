import { Ship, ShipOrientation } from "src/domain/game";
import ShipImage from "./ShipImage";
import styled from "styled-components";
import { GRID_SIZE } from "src/domain/constants";
import { useDrag } from "react-dnd";
import { DndTypes } from "src/ui/constants";
import { ShipLocation } from "src/ui/stores/placingShipLocation";

type Props = {
  ship: Ship;
  location: ShipLocation;
};

export default function PlacingShip(props: Props) {
  const { ship, location } = props;

  const [, drag] = useDrag(
    () => ({
      type: DndTypes.Ship,
      item: location,
    }),
    [location]
  );

  return (
    <ShipImageWrapper
      $orientation={ship.orientation}
      ref={drag}
      $x={location.x}
      $y={location.y}
    >
      <ShipImage ship={ship} />
    </ShipImageWrapper>
  );
}

const ShipImageWrapper = styled.div<{
  $orientation: ShipOrientation;
  $x: number;
  $y: number;
}>`
  position: absolute;
  height: ${(p) =>
    p.$orientation === ShipOrientation.Horizontal
      ? (1 / GRID_SIZE) * 100 + "%"
      : "initial"};
  width: ${(p) =>
    p.$orientation === ShipOrientation.Vertical
      ? (1 / GRID_SIZE) * 100 + "%"
      : "initial"};

  top: ${(p) => p.$y}px;
  left: ${(p) => p.$x}px;

  display: flex;
`;
