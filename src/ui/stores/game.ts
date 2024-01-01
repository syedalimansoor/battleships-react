import { useStore } from "@nanostores/react";
import { deepMap } from "nanostores";
import { initializeGame } from "src/domain/functions";
import { Game } from "src/domain/game";

const $game = deepMap<Game>(initializeGame());
export default $game;

export function usePlayerName(idx: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${idx}].name`] });

  const setPlayerName = (newName: string) => {
    $game.setKey(`players[${idx}].name`, newName);
  };

  return [game.players[idx].name, setPlayerName] as const;
}
