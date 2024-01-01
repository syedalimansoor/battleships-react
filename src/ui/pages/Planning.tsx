import styled from "styled-components";
import ContentWrapper from "ui/layouts/ContentWrapper";
import Grid from "../components/Grid";

export default function Planning() {
  return (
    <ContentWrapper>
      <PageWrapper>
        <Grid />
        <p>bye</p>
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
