import { MouseEventHandler } from "react";
import { GRID_SIZE } from "src/domain/constants";
import styled from "styled-components";

type Props = {
  handleClick: MouseEventHandler<HTMLDivElement>;
};

const Square = (props: Props) => {
  return <StyledSquare onClick={props.handleClick} />;
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
