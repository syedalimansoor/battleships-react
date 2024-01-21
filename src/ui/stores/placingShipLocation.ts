import { useStore } from "@nanostores/react";
import { map } from "nanostores";

export type ShipLocation = {
  x: number;
  y: number;
};

const $placingShipLocation = map<ShipLocation>({
  x: 0,
  y: 0,
});
export default $placingShipLocation;

export const usePlacingShipLocation = () => {
  const placingShipLocation = useStore($placingShipLocation);
  return [placingShipLocation, $placingShipLocation.set] as const;
};
