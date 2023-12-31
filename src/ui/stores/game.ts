import { useStore } from "@nanostores/react";
import { deepMap } from "nanostores";
import { initializeGame } from "src/domain/functions";
import { Game } from "src/domain/game";

const $game = deepMap<Game>(initializeGame());
export default $game;

export function usePlayerName(idx: number) {
  const game = useStore($game, { keys: ["players[0].name"] });

  const setPlayerName = (name: string) => {
    $game.setKey(`players[${idx}].name`, name);
  };

  return [game.players[idx].name, setPlayerName] as const;
}
