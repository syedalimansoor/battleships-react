import styled from "styled-components";

export default function PlayerNameField() {
  return (
    <Wrapper>
      <Input id="playerName" placeholder="The Conqueror" />
      <Label htmlFor="playerName">player name</Label>
    </Wrapper>
  );
}

const Input = styled.input`
  text-align: center;
  color: ${(p) => p.theme.color.yellow5};
  background: transparent;
  border: 2px solid currentColor;
  border-radius: 10px;
  padding: 10px 15px;

  &:focus {
    outline: 2px dashed currentColor;
    outline-offset: 5px;
  }

  &::placeholder {
    color: ${(p) => p.theme.color.blue3};
  }
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 0.75rem;
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 8px;
`;
