import { atom } from "nanostores";

const $selectedShipId = atom<string | null>(null);

export default $selectedShipId;
