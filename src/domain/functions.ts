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
  Square,
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
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Battleship,
      name: "battleship",
      length: 4,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Destroyer,
      name: "destroyer",
      length: 3,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.Submarine,
      name: "submarine",
      length: 3,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
    {
      id: uuid(),
      category: ShipCategories.PatrolBoat,
      name: "patrol boat",
      length: 2,
      positionStatus: ShipPositionStatus.Default,
      orientation: ShipOrientation.Horizontal,
      squares: [],
    },
  ];

  return {
    selected: null,
    ships,
    unplacedShips: ships.map((ship) => ship.id),
    placedShips: [],
  };
}

/**
 * Selects a ship from the fleet to be ready for placement on the grid. If the ship is already selected, then it will deselect the ship.
 */
export function selectShip(fleet: Fleet, ship: Ship): Fleet {
  let newFleet: Fleet;
  if (fleet.selected && fleet.selected === ship.id) {
    newFleet = { ...fleet, selected: null };
  } else {
    newFleet = { ...fleet, selected: ship.id };
  }
  return newFleet;
}

export function placeShip(grid: Grid, square: Square, ship: Ship) {
  const squareList: Square[] = [];
  const { row, column } = square.location;

  switch (ship.orientation) {
    case ShipOrientation.Horizontal:
      for (let squareIndex = 0; squareIndex < ship.length; squareIndex++) {
        try {
          squareList.push(grid[row][column + squareIndex]);
        } catch (error) {
          console.log("Invalid position!");
        }
      }
      break;
    case ShipOrientation.Vertical:
      for (let squareIndex = 0; squareIndex < ship.length; squareIndex++) {
        try {
          squareList.push(grid[row + GRID_SIZE * squareIndex][column]);
        } catch (error) {
          console.log("Invalid position!");
        }
      }
  }

  const newShip: Ship = { ...ship, squares: squareList };
  return newShip;
}
