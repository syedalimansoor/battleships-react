import { Fleet, PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import Subheading from "./common/Subheading";
import { getShip, useFleet } from "../stores/game";
import AvailableShip from "./common/AvailableShip";

type Props = {
  playerIndex: PlayerIndex;
};

export default function ShipSelector(props: Props) {
  const [fleet, setFleet] = useFleet(props.playerIndex);

  const handleShipClick = (shipId: string) => {
    let newFleet: Fleet;
    if (fleet.selected === shipId) {
      newFleet = { ...fleet, selected: null };
    } else {
      newFleet = { ...fleet, selected: shipId };
    }
    setFleet(newFleet);
  };

  return (
    <Wrapper>
      {fleet.unplacedShips.map((shipId) => {
        const ship = getShip(props.playerIndex, shipId);
        return (
          <AvailableShip
            ship={ship}
            onClick={handleShipClick}
            selected={fleet.selected === ship.id}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 20px 40px;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px 10px 0 0;

  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;
