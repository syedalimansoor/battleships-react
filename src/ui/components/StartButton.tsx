import styled from "styled-components";

export default function StartButton() {
  return <Button>Press to begin!</Button>;
}

const Button = styled.button`
  background-color: ${(p) => p.theme.color.yellow5};
  border: none;
  padding: 10px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 0 ${(p) => p.theme.color.yellow6};
  transition: 50ms ease;
  cursor: pointer;

  &:active {
    box-shadow: 0 0 0 ${(p) => p.theme.color.yellow6};
    transform: translateY(5px);
  }
`;
