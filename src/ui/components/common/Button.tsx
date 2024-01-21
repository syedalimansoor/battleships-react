import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  icon: ReactNode;
};

export default function Button(props: Props) {
  const { children: label, icon } = props;

  return (
    <StyledButton>
      <IconWrapper>{icon}</IconWrapper>
      <span>{label}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 1rem;
  background: transparent;
  color: ${(p) => p.theme.color.yellow5};
  border: 2px solid currentColor;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.span``;
