import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import { getShip, useFleet } from "../stores/game";
import UnplacedShip from "./ships/UnplacedShip";
import $selectedShipId from "../stores/selectedShipId";

type Props = {
  playerIndex: PlayerIndex;
};

export default function ShipSelector(props: Props) {
  const [fleet, setFleet] = useFleet(props.playerIndex);

  const selectShip = (shipToBeSelectedId: string) => {
    $selectedShipId.set(shipToBeSelectedId);
    setFleet({
      ...fleet,
      unplacedShips: fleet.unplacedShips.filter(
        (shipId) => shipId !== shipToBeSelectedId
      ),
    });
  };

  return (
    <Wrapper>
      {fleet.unplacedShips.map((shipId) => {
        const ship = getShip(props.playerIndex, shipId);
        return <UnplacedShip key={shipId} ship={ship} onClick={selectShip} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 20px 40px;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px 10px 0 0;

  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
