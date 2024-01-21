import { GRID_SIZE } from "src/domain/constants";
import { type Square } from "src/domain/game";
import styled from "styled-components";

type Props = {
  square: Square;
  onClick?: (square: Square) => void;
};

const Square = (props: Props) => {
  const { square } = props;
  const handleClick = () => {
    props.onClick && props.onClick(square);
  };

  const gridRow = square.location.row + 1;
  const gridColumn = square.location.column + 1;

  return (
    <StyledSquare onClick={handleClick} $row={gridRow} $column={gridColumn} />
  );
};

const StyledSquare = styled.div<{ $row: number; $column: number }>`
  border: 2px solid ${(p) => p.theme.color.blue5};

  &:nth-of-type(-n + ${GRID_SIZE}) {
    border-top-color: transparent;
  }
  &:nth-last-of-type(-n + ${GRID_SIZE}) {
    border-bottom-color: transparent;
  }
  &:nth-of-type(${GRID_SIZE}n) {
    border-right-color: transparent;
  }
  &:nth-last-of-type(${GRID_SIZE}n) {
    border-left-color: transparent;
  }

  grid-row: ${(p) => p.$row};
  grid-column: ${(p) => p.$column};
`;

export default Square;
