import { GRID_SIZE } from "src/domain/constants";
import { Ship, ShipCategories, ShipOrientation } from "src/domain/game";
import styled from "styled-components";
import FlatEnd from "ui/assets/ship-parts/flat-end.svg?react";
import PointedEnd from "ui/assets/ship-parts/pointed-end.svg?react";
import RoundEnd from "ui/assets/ship-parts/round-end.svg?react";

type Props = {
  ship: Ship;
};

export default function GridShip(props: Props) {
  const { ship } = props;

  let Rear: typeof FlatEnd;
  let Front: typeof FlatEnd;

  switch (ship.category) {
    case ShipCategories.Carrier:
      Rear = Front = FlatEnd;
      break;
    case ShipCategories.Battleship:
    case ShipCategories.Destroyer:
      Rear = FlatEnd;
      Front = PointedEnd;
      break;
    case ShipCategories.Submarine:
      Rear = Front = RoundEnd;
      break;
    case ShipCategories.PatrolBoat:
      Rear = Front = PointedEnd;
      break;
  }

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
      <Rear />
      {Array.from({ length: ship.length - 2 }, (_, index) => (
        <ShipBody key={index} />
      ))}
      <Front />
    </PartsWrapper>
  );
}

const PartsWrapper = styled.div<{
  $column: number;
  $row: number;
  $width: number;
  $height: number;
}>`
  display: grid;
  grid-template-rows: repeat(${(p) => p.$height}, 1fr);
  grid-template-columns: repeat(${(p) => p.$width}, 1fr);

  & > :last-child {
    transform: scaleX(-1) translateX(1px);
  }

  position: absolute;
  width: ${(p) => (p.$width / GRID_SIZE) * 100}%;
  height: ${(p) => (p.$height / GRID_SIZE) * 100}%;
  top: ${(p) => ((p.$row - 1) / GRID_SIZE) * 100}%;
  left: ${(p) => ((p.$column - 1) / GRID_SIZE) * 100}%;

  transition: 200ms ease;
`;

const ShipBody = styled.div`
  background-color: ${(p) => p.theme.color.yellow5};
  aspect-ratio: 1;
`;
