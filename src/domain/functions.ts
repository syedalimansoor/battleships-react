import { GRID_SIZE } from "./constants";
import {
  Fleet,
  Game,
  GamePhase,
  Grid,
  Ship,
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
  return {
    selected: null,
    ships: [
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
    ],
  };
}

/**
 * Selects a ship from the fleet to be ready for placement on the grid. If the ship is already selected, then it will deselect the ship.
 */
export function selectShip(fleet: Fleet, ship: Ship): Fleet {
  let newFleet: Fleet;
  if (fleet.selected && fleet.selected.id === ship.id) {
    newFleet = { ...fleet, selected: null };
  } else {
    newFleet = { ...fleet, selected: ship };
  }
  return newFleet;
}
