import { ShipCategories, type Ship } from "src/domain/game";

import Carrier from "ui/assets/ship-parts/carrier.svg?react";
import Battleship from "ui/assets/ship-parts/battleship.svg?react";
import Destroyer from "ui/assets/ship-parts/destroyer.svg?react";
import Submarine from "ui/assets/ship-parts/submarine.svg?react";
import PatrolBoat from "ui/assets/ship-parts/patrol-boat.svg?react";

type Props = {
  ship: Ship;
};

export default function ShipImage(props: Props) {
  const { ship } = props;

  let ShipType: typeof Carrier;
  switch (ship.category) {
    case ShipCategories.Carrier:
      ShipType = Carrier;
      break;
    case ShipCategories.Battleship:
      ShipType = Battleship;
      break;
    case ShipCategories.Destroyer:
      ShipType = Destroyer;
      break;
    case ShipCategories.Submarine:
      ShipType = Submarine;
      break;
    case ShipCategories.PatrolBoat:
      ShipType = PatrolBoat;
      break;
  }

  return <ShipType />;
}
