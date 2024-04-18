export default function Display({ currentPlayedName }) {
  return (
    <div id="display-wrapper" className="display-wrapper">
      <p id="display" className="display-wrapper">
        {currentPlayedName}
      </p>
    </div>
  );
}
