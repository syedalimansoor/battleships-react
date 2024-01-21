import { type Ship } from "src/domain/game";
import styled from "styled-components";
import Subheading from "../common/Subheading";
import ShipImage from "./ShipImage";

type Props = {
  ship: Ship;
  onClick?: (shipId: string) => void;
  selected?: boolean;
};

export default function UnplacedShip(props: Props) {
  const { ship } = props;

  const handleClick = () => {
    props.onClick && props.onClick(ship.id);
  };

  return (
    <ShipWrapper onClick={handleClick}>
      <StyledSubheading>{ship.name}</StyledSubheading>
      <ShipImageWrapper>
        <ShipImage ship={ship} />
      </ShipImageWrapper>
    </ShipWrapper>
  );
}

const ShipImageWrapper = styled.div`
  height: 35px;
  display: flex;
`;

const StyledSubheading = styled(Subheading)`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const ShipWrapper = styled.div``;
