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
          <ShipWrapper key={ship.name}>
            <StyledSubheading>{ship.name}</StyledSubheading>
            <AvailableShip
              ship={ship}
              onClick={handleShipClick}
              selected={fleet.selected === ship.id}
            />
          </ShipWrapper>
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

const StyledSubheading = styled(Subheading)`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const ShipWrapper = styled.div``;
