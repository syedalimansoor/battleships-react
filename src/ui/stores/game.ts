import { useStore } from "@nanostores/react";
import { deepMap } from "nanostores";
import { initializeGame } from "src/domain/functions";
import { Game, PlayerIndex, Ship } from "src/domain/game";

const $game = deepMap<Game>(initializeGame());
export default $game;

export function usePlayerName(idx: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${idx}].name`] });

  const setPlayerName = (newName: string) => {
    $game.setKey(`players[${idx}].name`, newName);
  };

  return [game.players[idx].name, setPlayerName] as const;
}

export function useGrid(idx: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${idx}].grid`] });

  return [game.players[idx].grid] as const;
}

export function useFleet(idx: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${idx}].fleet`] });

  return [game.players[idx].fleet] as const;
}

export function useShip(playerIndex: PlayerIndex, shipIndex: number) {
  const KEY = `players[${playerIndex}].fleet[${shipIndex}]` as const;
  const game = useStore($game, { keys: [KEY] });

  const setShip = (newShip: Ship) => {
    $game.setKey(KEY, newShip);
  };

  return [game.players[playerIndex].fleet[shipIndex], setShip] as const;
}
