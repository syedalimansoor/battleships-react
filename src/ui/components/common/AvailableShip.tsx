import { type Ship } from "src/domain/game";
import styled from "styled-components";
import Subheading from "./Subheading";
import ShipImage from "./Ship";

type Props = {
  ship: Ship;
  onClick: (shipId: string) => void;
  selected: boolean;
};

export default function AvailableShip(props: Props) {
  const { ship, selected } = props;

  const handleClick = () => {
    props.onClick(ship.id);
  };

  return (
    <ShipWrapper onClick={handleClick}>
      <StyledSubheading>{ship.name}</StyledSubheading>
      <PartsWrapper $selected={selected}>
        <ShipImage ship={ship} />
      </PartsWrapper>
    </ShipWrapper>
  );
}

const PartsWrapper = styled.div<{ $selected?: boolean }>`
  height: 35px;
  display: flex;
  transition: filter 200ms ease;
  filter: ${(p) =>
    p.$selected ? `drop-shadow(0 0 5px ${p.theme.color.yellow5})` : `none`};
`;

const StyledSubheading = styled(Subheading)`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const ShipWrapper = styled.div``;
