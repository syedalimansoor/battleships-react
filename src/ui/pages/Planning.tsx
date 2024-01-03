import styled from "styled-components";
import ContentWrapper from "ui/layouts/ContentWrapper";
import Grid from "../components/Grid";
import Heading from "../components/common/Heading";
import Subheading from "../components/common/Subheading";

export default function Planning() {
  return (
    <ContentWrapper>
      <PageWrapper>
        <Grid idx={0} />
        <Heading>Place your ships</Heading>
        <Subheading>Tap on a ship to select it.</Subheading>
      </PageWrapper>
    </ContentWrapper>
  );
}

const PageWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: ${(p) => p.theme.padding.inline};
`;
