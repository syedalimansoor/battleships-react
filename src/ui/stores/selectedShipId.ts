import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

const $selectedShipId = atom<string | null>(null);

export default $selectedShipId;

export const useSelectedShipId = () => {
  const selectedShipId = useStore($selectedShipId);
  return [selectedShipId, $selectedShipId.set] as const;
};
