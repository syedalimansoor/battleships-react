import { MouseEventHandler } from "react";
import { selectShip } from "src/domain/functions";
import { type Ship, ShipCategories, PlayerIndex } from "src/domain/game";
import { useFleet, useShip } from "src/ui/stores/game";
import styled from "styled-components";
import FlatEnd from "ui/assets/ship-parts/flat-end.svg?react";
import PointedEnd from "ui/assets/ship-parts/pointed-end.svg?react";
import RoundEnd from "ui/assets/ship-parts/round-end.svg?react";

type Props = {
  playerIndex: PlayerIndex;
  shipIndex: number;
};

export default function Ship(props: Props) {
  const [ship] = useShip(props.playerIndex, props.shipIndex);
  const [fleet, setFleet] = useFleet(props.playerIndex);

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

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    const newFleet = selectShip(fleet, ship);
    setFleet(newFleet);
  };

  return (
    <PartsWrapper onClick={handleClick} $selected={fleet.selected === ship}>
      <Rear />
      {Array.from({ length: ship.length - 2 }, (_, index) => (
        <ShipBody key={index} />
      ))}
      <Front />
    </PartsWrapper>
  );
}

const PartsWrapper = styled.div<{ $selected?: boolean }>`
  display: flex;
  align-items: stretch;
  height: 30px;
  width: fit-content;

  & > :last-child {
    transform: scaleX(-1) translateX(1px);
  }

  transition: filter 200ms ease;
  filter: ${(p) =>
    p.$selected ? `drop-shadow(0 0 5px ${p.theme.color.yellow5})` : `none`};
`;

const ShipBody = styled.div`
  background-color: ${(p) => p.theme.color.yellow5};
  aspect-ratio: 1;
`;
