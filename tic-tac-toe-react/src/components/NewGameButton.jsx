export default function NewGameButton({ restartGame }) {
  return (
    <div className="new-game-button-container" onClick={restartGame}>
      <button className="new-game-button">Reiniciar el Juego</button>
    </div>
  );
}
