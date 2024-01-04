import { type Ship, ShipCategories } from "src/domain/game";
import styled from "styled-components";
import FlatEnd from "ui/assets/ship-parts/flat-end.svg?react";
import PointedEnd from "ui/assets/ship-parts/pointed-end.svg?react";
import RoundEnd from "ui/assets/ship-parts/round-end.svg?react";

type Props = { ship: Ship };

export default function Ship(props: Props) {
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

  return (
    <PartsWrapper>
      <Rear />
      <ShipBody $length={ship.length} />
      <Front />
    </PartsWrapper>
  );
}

const PartsWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 30px;

  & > :last-child {
    transform: scaleX(-1) translateX(1px);
  }
`;

const ShipBody = styled.div.attrs<{ $length: number }>((p) => ({
  $length: p.$length,
}))`
  background-color: ${(p) => p.theme.color.yellow5};
  aspect-ratio: ${(p) => p.$length - 2};
`;
