import { useState, useEffect } from "react";
import DrumPadSection from "./components/DrumPadSection";
import DisplaySection from "./components/DisplaySection";
import {
  defaultSoundsMode,
  alternativeSoundsMode,
} from "./constants/constants";

export default function App() {
  const [keywordData, setKeywordData] = useState({
    currentPlayedName: "",
    currentPlayedKeyword: "",
    actualMode: "defaultSoundsMode",
  });

  const manageSoundName = (actualMode, elementDispatched) => {
    if (actualMode == "defaultSoundsMode") {
      return (
        defaultSoundsMode[elementDispatched]["soundName"] ||
        keywordData.currentPlayedName
      );
    } else {
      return (
        alternativeSoundsMode[elementDispatched]["soundName"] ||
        keywordData.currentPlayedName
      );
    }
  };

  const handleEventClick = (event) => {
    event.target.lastChild.play();
    const elementDispatched = event.target.textContent;
    return elementDispatched;
  };

  const handleKeyword = (event) => {
    const keyPressed = event.key.toUpperCase();

    if (defaultSoundsMode.hasOwnProperty(keyPressed)) {
      document.getElementById(keyPressed).lastChild.play();
      return keyPressed;
    }
  };

  const handleSoundDispatched = (event) => {
    let elementDispatched = "";

    if (event.type == "click") {
      elementDispatched = handleEventClick(event);
    } else {
      elementDispatched =
        handleKeyword(event) ?? keywordData.currentPlayedKeyword;
    }

    const actualSoundName = manageSoundName(
      keywordData.actualMode,
      elementDispatched
    );

    setKeywordData({
      ...keywordData,
      currentPlayedName: actualSoundName,
      currentPlayedKeyword: elementDispatched,
    });
  };

  useEffect(
    () => document.addEventListener("keydown", handleSoundDispatched),
    []
  );

  const handleSoundMode = () => {
    let newMode = "";
    if (keywordData.actualMode == "defaultSoundsMode") {
      newMode = "alternativeSoundsMode";
    } else {
      newMode = "defaultSoundsMode";
    }

    setKeywordData({
      ...keywordData,
      currentPlayedName: manageSoundName(
        newMode,
        keywordData.currentPlayedKeyword
      ),
      actualMode: newMode,
    });
  };

  const padsInfo =
    keywordData.actualMode == "defaultSoundsMode"
      ? defaultSoundsMode
      : alternativeSoundsMode;

  return (
    <div id="drum-machine" className="drum-machine">
      <DrumPadSection
        padsInfo={padsInfo}
        handleSoundDispatched={handleSoundDispatched}
      />
      <DisplaySection
        handleSoundMode={handleSoundMode}
        currentPlayedName={keywordData.currentPlayedName}
      />
    </div>
  );
}
