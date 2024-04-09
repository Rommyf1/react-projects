import TurnIndicatorElement from "./TurnIndicatorElement";

export default function TurnIndicator({ actualPlayer }) {
  return (
    <div className="turn-indicator-container">
      <h2 className="turn-indicator-title">Es el turno de: </h2>
      <TurnIndicatorElement actualPlayer={actualPlayer} elementValue={"X"} />
      <TurnIndicatorElement actualPlayer={actualPlayer} elementValue={"O"} />
    </div>
  );
}
