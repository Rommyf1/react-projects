import Square from "./Square";

export default function Board({ boardData, updateBoard }) {
  return (
    <div className="board">
      {boardData.map((squareValue, index) => {
        return (
          <Square
            key={index}
            position={index}
            value={squareValue}
            updateBoard={updateBoard}
          />
        );
      })}
    </div>
  );
}
