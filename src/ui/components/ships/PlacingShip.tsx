import { Ship, ShipOrientation } from "src/domain/game";
import ShipImage from "./ShipImage";
import styled from "styled-components";
import { GRID_SIZE } from "src/domain/constants";
import { useDrag } from "react-dnd";
import { DndTypes } from "src/ui/constants";

type Props = {
  ship: Ship;
};

export default function PlacingShip(props: Props) {
  const { ship } = props;

  const [, drag] = useDrag(() => ({
    type: DndTypes.Ship,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <ShipImageWrapper $orientation={ship.orientation} ref={drag}>
      <ShipImage ship={ship} />
    </ShipImageWrapper>
  );
}

const ShipImageWrapper = styled.div<{ $orientation: ShipOrientation }>`
  position: absolute;
  height: ${(p) =>
    p.$orientation === ShipOrientation.Horizontal
      ? (1 / GRID_SIZE) * 100 + "%"
      : "initial"};
  width: ${(p) =>
    p.$orientation === ShipOrientation.Vertical
      ? (1 / GRID_SIZE) * 100 + "%"
      : "initial"};

  display: flex;
`;
