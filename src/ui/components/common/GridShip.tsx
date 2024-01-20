import { GRID_SIZE } from "src/domain/constants";
import { type Ship, ShipOrientation } from "src/domain/game";
import styled from "styled-components";
import ShipImage from "./Ship";

type Props = {
  ship: Ship;
};

export default function GridShip(props: Props) {
  const { ship } = props;

  const column = ship.squares[0].location.column + 1;
  const row = ship.squares[0].location.row + 1;
  let width, height: number;
  switch (ship.orientation) {
    case ShipOrientation.Horizontal:
      width = ship.length;
      height = 1;
      break;
    default:
      width = 1;
      height = ship.length;
  }

  return (
    <PartsWrapper $column={column} $row={row} $width={width} $height={height}>
      <ShipImage ship={props.ship} />
    </PartsWrapper>
  );
}

const PartsWrapper = styled.div<{
  $column: number;
  $row: number;
  $width: number;
  $height: number;
}>`
  position: absolute;
  width: ${(p) => (p.$width / GRID_SIZE) * 100}%;
  height: ${(p) => (p.$height / GRID_SIZE) * 100}%;
  top: ${(p) => ((p.$row - 1) / GRID_SIZE) * 100}%;
  left: ${(p) => ((p.$column - 1) / GRID_SIZE) * 100}%;

  transition: 200ms ease;
`;
