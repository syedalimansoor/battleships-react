import { GRID_SIZE } from "src/domain/constants";
import { type Square } from "src/domain/game";
import styled from "styled-components";

type Props = {
  square: Square;
  onClick: (square: Square) => void;
};

const Square = (props: Props) => {
  const { square } = props;
  const handleClick = () => {
    props.onClick(square);
  };
  return <StyledSquare onClick={handleClick} />;
};

const StyledSquare = styled.div`
  &:not(:nth-of-type(${GRID_SIZE}n + 1)) {
    border-left: 3px solid ${(p) => p.theme.color.blue5};
  }
  &:nth-of-type(n + ${GRID_SIZE + 1}) {
    border-top: 3px solid ${(p) => p.theme.color.blue5};
  }
`;

export default Square;
