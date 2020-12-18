import { useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import Roulette from "./Roulette";
import StartScreen from "./StartScreen";

function App() {
  const [screen, setScreen] = useState();
  const [whichCategory, setWhichCategory] = useState("SETCATEGORY");

  function nextScreen(screen, category) {
    setScreen(screen);
    setWhichCategory(category);
  }

  switch (screen) {
    case 2:
      return (
        <div className="App">
          <LoadingScreen changeScreen={nextScreen} category={whichCategory} />
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
          <StartScreen changeScreen={nextScreen} />
        </div>
      );
  }
}

export default App;
