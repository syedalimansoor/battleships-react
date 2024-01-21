import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import { getShip, useFleet } from "../stores/game";
import UnplacedShip from "./ships/UnplacedShip";
import { useSelectedShipId } from "../stores/selectedShipId";
import Button from "./common/Button";
import RotateIcon from "ui/assets/icon-rotate.svg?react";
import ConfirmIcon from "ui/assets/icon-confirm.svg?react";

type Props = {
  playerIndex: PlayerIndex;
};

export default function ShipSelector(props: Props) {
  const [fleet, setFleet] = useFleet(props.playerIndex);
  const [selectedShipId, setSelectedShipId] = useSelectedShipId();

  const selectShip = (shipToBeSelectedId: string) => {
    setSelectedShipId(shipToBeSelectedId);
    setFleet({
      ...fleet,
      unplacedShips: fleet.unplacedShips.filter(
        (shipId) => shipId !== shipToBeSelectedId
      ),
    });
  };

  const ShipsList = (
    <ShipsListWrapper>
      {fleet.unplacedShips.map((shipId) => {
        const ship = getShip(props.playerIndex, shipId);
        return <UnplacedShip key={shipId} ship={ship} onClick={selectShip} />;
      })}
    </ShipsListWrapper>
  );

  const ButtonsList = (
    <ButtonsListWrapper>
      <Button icon={<RotateIcon />}>Rotate</Button>
      <Button icon={<ConfirmIcon />}>Confirm</Button>
    </ButtonsListWrapper>
  );

  return <Wrapper>{selectedShipId ? ButtonsList : ShipsList}</Wrapper>;
}

const Wrapper = styled.div`
  min-height: 200px;
  padding: ${(p) => p.theme.padding.inline} ${(p) => p.theme.padding.inline}
    40px;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px 10px 0 0;

  display: flex;
  flex-direction: column;
`;

const ShipsListWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const ButtonsListWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(p) => p.theme.padding.inline};
  height: 100%;
`;
