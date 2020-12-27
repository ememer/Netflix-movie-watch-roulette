import { useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import Roulette from "./Roulette";
import StartScreen from "./StartScreen";

function App() {
  const [screen, setScreen] = useState();
  const [userDataInput, setUserDataInput] = useState();
  const [filterResponse, setFilterResponse] = useState();

  function nextStep(screen) {
    setScreen(screen);
  }

  function getInputData(dataInput) {
    setUserDataInput(dataInput);
  }

  function getResponse(serverResponse) {
    setFilterResponse(serverResponse);
  }

  switch (screen) {
    case 2:
      return (
        <div className="App">
          <LoadingScreen
            getResponse={getResponse}
            changeScreen={nextStep}
            userData={userDataInput}
          />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Roulette response={filterResponse} />
        </div>
      );

    default:
      return (
        <div className="App">
          <StartScreen userDataInput={getInputData} changeScreen={nextStep} />
        </div>
      );
  }
}

export default App;
