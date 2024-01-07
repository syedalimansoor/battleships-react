import { GRID_SIZE } from "./constants";
import {
  Fleet,
  Game,
  GamePhase,
  Grid,
  ShipCategories,
  ShipOrientation,
  ShipPositionStatus,
} from "./game";

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
  return [
    {
      category: ShipCategories.Carrier,
      name: "carrier",
      length: 5,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      category: ShipCategories.Battleship,
      name: "battleship",
      length: 4,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      category: ShipCategories.Destroyer,
      name: "destroyer",
      length: 3,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      category: ShipCategories.Submarine,
      name: "submarine",
      length: 3,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      category: ShipCategories.PatrolBoat,
      name: "patrol boat",
      length: 2,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
  ];
}
