import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import Subheading from "./common/Subheading";
import { useFleet } from "../stores/game";
import Ship from "./common/Ship";

type Props = {
  playerIndex: PlayerIndex;
};

export default function ShipSelector(props: Props) {
  const [fleet] = useFleet(props.playerIndex);

  return (
    <Wrapper>
      {fleet.map((ship, shipIndex) => (
        <ShipWrapper key={ship.name}>
          <StyledSubheading>{ship.name}</StyledSubheading>
          <Ship
            ship={ship}
            playerIndex={props.playerIndex}
            shipIndex={shipIndex}
          />
        </ShipWrapper>
      ))}
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
