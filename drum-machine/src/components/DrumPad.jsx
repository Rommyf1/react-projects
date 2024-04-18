export default function DrumPad({ audioSrc, keyword }) {
  //continuar
  return (
    <div id={audioSrc} className="drum-pad">
      <button id={keyword} className="audio-button">
        {keyword}
        <audio id={keyword} className="clip" src={audioSrc}></audio>
      </button>
    </div>
  );
}
