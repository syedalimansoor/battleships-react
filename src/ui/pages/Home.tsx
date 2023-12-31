import styled from "styled-components";
import ContentWrapper from "ui/layouts/ContentWrapper";
import ShipBackground from "ui/layouts/ShipBackground";
import ShipLogo from "ui/assets/ship-logo.svg?react";
import BattleshipsWordmark from "ui/assets/battleships-wordmark-double.svg?react";
import PlayerNameField from "ui/components/PlayerNameField";
import StartButton from "ui/components/StartButton";

export default function Home() {
  return (
    <ShipBackground>
      <ContentWrapper>
        <HomeWrapper>
          <ShipLogo />
          <Header>
            <BattleshipsWordmark title="Battleships" />
            <Subtitle>navigate, annihilate, conquer</Subtitle>
          </Header>
          <PlayerNameField />
          <StartButton />
          <Footer>
            A game by{" "}
            <a href="https://www.instagram.com/alimansoor.dev">
              Syed Ali Mansoor
            </a>
          </Footer>
        </HomeWrapper>
      </ContentWrapper>
    </ShipBackground>
  );
}

const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 50px;
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${(p) => p.theme.color.blue2};
  font-size: 1.25rem;
`;

const Footer = styled.p`
  text-align: center;
  color: ${(p) => p.theme.color.blue2};
  font-size: 0.75rem;
`;
