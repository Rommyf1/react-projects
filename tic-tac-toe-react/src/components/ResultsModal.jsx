import NewGameButton from "./NewGameButton";

export default function ResultsModal({ resultsTitle, gameResult }) {
  return (
    <section className="result-game-container">
      <h2>{resultsTitle}</h2>
      <div className="result-container">
        <span>{gameResult}</span>
      </div>
      <NewGameButton />
    </section>
  );
}
