export type Game = {
  players: PlayersList;
  turn: PlayerIndex;
  phase: GamePhase;
  winner: PlayerIndex | null;
};

export type PlayersList = [Player, Player];

export type Player = {
  name: string;
  isHuman: boolean;
  fleet: Fleet;
  grid: Grid;
  hits: number;
  misses: number;
};

export type Ship = {
  id: string;
  orientation: ShipOrientation;
  squares: Square[];
} & (Carrier | Battleship | Destroyer | Submarine | PatrolBoat);

export type Fleet = {
  ships: Ship[];
  unplacedShips: string[];
  placedShips: string[];
  selected: string | null;
};

export type Square = {
  location: SquareLocation;
  ship: Ship | null;
  isHit: boolean;
};

export type Grid = Square[][];

export type SquareLocation = {
  row: number;
  column: number;
};

export enum ShipOrientation {
  Horizontal,
  Vertical,
}

export type PlayerIndex = 0 | 1;

export enum GamePhase {
  Planning,
  Fighting,
  Over,
}

export enum ShipCategories {
  Carrier,
  Battleship,
  Destroyer,
  Submarine,
  PatrolBoat,
}

type Carrier = {
  category: ShipCategories.Carrier;
  name: "carrier";
  length: 5;
};

type Battleship = {
  category: ShipCategories.Battleship;
  name: "battleship";
  length: 4;
};

type Destroyer = {
  category: ShipCategories.Destroyer;
  name: "destroyer";
  length: 3;
};

type Submarine = {
  category: ShipCategories.Submarine;
  name: "submarine";
  length: 3;
};

type PatrolBoat = {
  category: ShipCategories.PatrolBoat;
  name: "patrol boat";
  length: 2;
};
