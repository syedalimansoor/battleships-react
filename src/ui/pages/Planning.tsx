import styled from "styled-components";
import ContentWrapper from "ui/layouts/ContentWrapper";
import Grid from "../components/Grid";
import Heading from "../components/common/Heading";
import Subheading from "../components/common/Subheading";
import ShipSelector from "../components/ShipSelector";
import { useSelectedShipId } from "../stores/selectedShipId";

const PLAYER_INDEX = 0;

export default function Planning() {
  return (
    <ContentWrapper>
      <PageWrapper>
        <Grid playerIndex={PLAYER_INDEX} />
        <div>
          <Heading>Place your ships</Heading>
          <ActionIndicator />
          <ShipSelector playerIndex={PLAYER_INDEX} />
        </div>
      </PageWrapper>
    </ContentWrapper>
  );
}

const ActionIndicator = () => {
  const [selectedShipId] = useSelectedShipId();

  return (
    <StyledSubheading>
      {selectedShipId
        ? "Drag the ship to the correct position."
        : "Tap on a ship to select it."}
    </StyledSubheading>
  );
};

const PageWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: ${(p) => p.theme.padding.inline};
  gap: 2em;
`;

const StyledSubheading = styled(Subheading)`
  margin-bottom: 20px;
`;
