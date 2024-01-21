import { atom } from "nanostores";
import { PlayerIndex } from "src/domain/game";

const $activePlayerIndex = atom<PlayerIndex>(0);
export default $activePlayerIndex;
