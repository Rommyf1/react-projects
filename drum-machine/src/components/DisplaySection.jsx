import ControlSwitch from "./ControlSwitch";
import Display from "./Display";

export default function DisplaySection({ currentPlayedName, handleSoundMode }) {
  return (
    <div id="display-container" className="display-container">
      <ControlSwitch controlName="power" />
      <Display currentPlayedName={currentPlayedName} />
      <ControlSwitch handleSoundMode={handleSoundMode} controlName="mode" />
    </div>
  );
}
