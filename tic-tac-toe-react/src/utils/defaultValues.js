//Players
export const PLAYERS = {
    x: "X",
    o: "O",
};

//Initial position of board
export const initialBoard = Array(9).fill(null);

//Initial Player
export const initialTurn = PLAYERS["x"];

//Initial Winner
export const initialWinner = null;

//Winner Combinations
export const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];