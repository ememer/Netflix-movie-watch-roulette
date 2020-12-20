import { useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import Roulette from "./Roulette";
import StartScreen from "./StartScreen";

function App() {
  const [screen, setScreen] = useState();
  const [whichCategory, setWhichCategory] = useState();
  const [userChoice, setUserChoice] = useState();

  function nextStep(screen, category, userInput) {
    setScreen(screen);
    setWhichCategory(category);
    setUserChoice(userInput);
  }

  switch (screen) {
    case 2:
      return (
        <div className="App">
          <LoadingScreen
            changeScreen={nextStep}
            category={whichCategory}
            userInput={userChoice}
          />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Roulette />
        </div>
      );

    default:
      return (
        <div className="App">
          <StartScreen changeScreen={nextStep} />
        </div>
      );
  }
}

export default App;
