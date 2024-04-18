import DrumPad from "./DrumPad";

export default function DrumPadSection({ padsInfo, handleSoundDispatched }) {
  const handleClick = (event) => {
    if (event.target.className == "audio-button") {
      return handleSoundDispatched(event);
    }
  };

  const getPadValues = (padsInfo) => {
    const soundSources = {};
    for (const pad in padsInfo) {
      soundSources[pad] = padsInfo[pad]["soundSrc"];
    }
    return soundSources;
  };

  //NOTA: Recibir audioSrc por Props, así podrá adaptarse dinámicamente al modo
  const padValues = getPadValues(padsInfo);
  return (
    <div
      onClick={handleClick}
      id="drum-pad-container"
      className="drumpad-container"
    >
      <div className="drumpad-row">
        <DrumPad keyword="Q" audioSrc={padValues.Q} />
        <DrumPad keyword="W" audioSrc={padValues.W} />
        <DrumPad keyword="E" audioSrc={padValues.E} />
      </div>
      <div className="drumpad-row">
        <DrumPad keyword="A" audioSrc={padValues.A} />
        <DrumPad keyword="S" audioSrc={padValues.S} />
        <DrumPad keyword="D" audioSrc={padValues.D} />
      </div>
      <div className="drumpad-row">
        <DrumPad keyword="Z" audioSrc={padValues.Z} />
        <DrumPad keyword="X" audioSrc={padValues.X} />
        <DrumPad keyword="C" audioSrc={padValues.C} />
      </div>
    </div>
  );
}
