import { GRID_SIZE } from "./constants";
import {
  Fleet,
  Game,
  GamePhase,
  Grid,
  Ship,
  ShipCategories,
  ShipOrientation,
} from "./game";
import { v4 as uuid } from "uuid";

export function initializeGame(): Game {
  return {
    turn: 0,
    phase: GamePhase.Planning,
    winner: null,

    players: [
      {
        name: "",
        isHuman: true,
        hits: 0,
        misses: 0,
        grid: initializeGrid(),
        fleet: initializeFleet(),
      },
      {
        name: "Computer",
        isHuman: false,
        hits: 0,
        misses: 0,
        grid: initializeGrid(),
        fleet: initializeFleet(),
      },
    ],
  };
}

function initializeGrid(): Grid {
  return Array.from({ length: GRID_SIZE }, (_, row) =>
    Array.from({ length: GRID_SIZE }, (_, column) => ({
      location: { row, column },
      ship: null,
      isHit: false,
    }))
  );
}

function initializeFleet(): Fleet {
  const ships: Ship[] = [
    {
      id: uuid(),
      category: ShipCategories.Carrier,
      name: "carrier",
      length: 5,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Battleship,
      name: "battleship",
      length: 4,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Destroyer,
      name: "destroyer",
      length: 3,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Submarine,
      name: "submarine",
      length: 3,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.PatrolBoat,
      name: "patrol boat",
      length: 2,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
  ];

  return {
    ships,
    unplacedShips: ships.map((ship) => ship.id),
    placedShips: [],
  };
}
