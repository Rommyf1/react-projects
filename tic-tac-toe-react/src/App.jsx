import { useState } from "react";
import Board from "./components/Board";
import NewGameButton from "./components/NewGameButton";
import TurnIndicator from "./components/TurnIndicator";
import {
  PLAYERS,
  initialBoard,
  initialTurn,
  initialWinner,
  winnerCombinations,
} from "./utils/defaultValues";
import "./assets/index.css";

export default function App() {
  const [actualBoard, updateBoard] = useState(() => {
    return JSON.parse(localStorage.getItem("actualBoard")) ?? initialBoard;
  });
  const [actualPlayer, updatePlayer] = useState(() => {
    return JSON.parse(localStorage.getItem("actualPlayer")) ?? initialTurn;
  });
  const [winner, setWinner] = useState(initialWinner);

  const changePlayer = () => {
    return actualPlayer === PLAYERS["x"] ? PLAYERS["o"] : PLAYERS["x"];
  };

  const verifyTie = (newBoard) => {
    if (newBoard.every((element) => typeof element === "string")) {
      alert("Empate");
    }
  };

  const checkWinner = (newBoard, actualPlayer) => {
    const verifyWinner = (position) => newBoard[position] === actualPlayer;
    let hasWinner = false;
    winnerCombinations.forEach((combination) => {
      if (combination.every(verifyWinner)) {
        hasWinner = true;
        return hasWinner;
      }
    });
    console.log(hasWinner);
    return hasWinner;
  };

  const manageGame = (position) => {
    if (actualBoard[position] || winner) {
      return;
    }
    const newBoard = [...actualBoard];
    newBoard[position] = actualPlayer;
    updateBoard(newBoard);
    localStorage.setItem("actualBoard", JSON.stringify(newBoard));
    const newPlayer = changePlayer();
    updatePlayer(newPlayer);
    localStorage.setItem("actualPlayer", JSON.stringify(newPlayer));
    if (checkWinner(newBoard, actualPlayer)) {
      alert(`Juego terminado. El Ganador es: ${actualPlayer}`);
      setWinner(actualPlayer);
    } else {
      verifyTie(newBoard);
    }
    localStorage.setItem(
      "gameData",
      JSON.stringify({
        actualBoard: newBoard,
        actualPlayer: newPlayer,
        actualWinner: winner,
      })
    );
  };

  const restartGame = () => {
    localStorage.clear();
    updateBoard(initialBoard);
    updatePlayer(initialTurn);
    setWinner(initialWinner);
  };

  return (
    <main className="main">
      <h1 className="game-title">Tic tac toe</h1>
      <NewGameButton restartGame={restartGame} />
      <Board updateBoard={manageGame} boardData={actualBoard} />
      <TurnIndicator actualPlayer={actualPlayer} />
    </main>
  );
}
