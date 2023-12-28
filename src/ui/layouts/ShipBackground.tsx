import styled from "styled-components";
import ShipIllustration from "../assets/ship-background.svg";

const ShipBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${ShipIllustration});
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ShipBackground;
