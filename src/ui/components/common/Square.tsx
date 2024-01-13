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

  const gridRow = square.location.row + 1;
  const gridColumn = square.location.column + 1;

  return (
    <StyledSquare onClick={handleClick} $row={gridRow} $column={gridColumn} />
  );
};

const StyledSquare = styled.div<{ $row: number; $column: number }>`
  &:not(:nth-of-type(${GRID_SIZE}n + 1)) {
    border-left: 3px solid ${(p) => p.theme.color.blue5};
  }
  &:nth-of-type(n + ${GRID_SIZE + 1}) {
    border-top: 3px solid ${(p) => p.theme.color.blue5};
  }

  grid-row: ${(p) => p.$row};
  grid-column: ${(p) => p.$column};
`;

export default Square;
