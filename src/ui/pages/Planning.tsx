import styled from "styled-components";
import ContentWrapper from "ui/layouts/ContentWrapper";
import Grid from "../components/Grid";
import Heading from "../components/common/Heading";
import Subheading from "../components/common/Subheading";
import ShipSelector from "../components/ShipSelector";

export default function Planning() {
  return (
    <ContentWrapper>
      <PageWrapper>
        <Grid playerIndex={0} />
        <div>
          <Heading>Place your ships</Heading>
          <StyledSubheading>Tap on a ship to select it.</StyledSubheading>
          <ShipSelector playerIndex={0} />
        </div>
      </PageWrapper>
    </ContentWrapper>
  );
}

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
