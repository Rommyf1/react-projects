export default function TurnIndicatorElement({ elementValue, actualPlayer }) {
  const showActualPlayer = () => {
    return elementValue !== actualPlayer
      ? "turn-indicator-element"
      : "turn-indicator-element turn-active";
  };

  return <div className={showActualPlayer()}>{elementValue}</div>;
}
