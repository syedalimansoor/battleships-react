import { Ship, ShipOrientation } from "src/domain/game";
import ShipImage from "./ShipImage";
import styled from "styled-components";
import { GRID_SIZE } from "src/domain/constants";

type Props = {
  ship: Ship;
};

export default function PlacingShip(props: Props) {
  const { ship } = props;

  return (
    <ShipImageWrapper $orientation={ship.orientation}>
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
