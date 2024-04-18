export default function ControlSwitch({ handleSoundMode, controlName }) {
  const handleSwitchAction = (event) => {
    if (
      event.target.id == "mode-container" ||
      event.target.id == "mode-status"
    ) {
      return handleSoundMode();
    }
  };

  const containerName = `${controlName}-container`;
  const controlStatusName = `${controlName}-status`;

  return (
    <div
      onClick={handleSwitchAction}
      id={containerName}
      className={containerName}
    >
      <div id={controlStatusName} className={controlStatusName}></div>
    </div>
  );
}
