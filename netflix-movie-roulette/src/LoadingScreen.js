import "./LoadingScreen.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";

const LoadingScreen = (props) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(props.category);
    console.log(
      "PROPSY",
      props.userInput,
      props.userInput.category,
      ">>>",
      "rok",
      props.userInput.year,
      "gat",
      props.userInput.genre
    );
    if (
      props.userInput.year === "random" &&
      props.userInput.genre === "random"
    ) {
      // movie/serial >>> year/genre = random
      console.log("film/serial >>> rok/gatunek = random");
    } else if (
      props.userInput.year !== "random" &&
      props.userInput.genre === "random"
    ) {
      // movie/serial >>> + year - genre = random
      console.log(" film/serial >>> + rok -  gatunek - random");
    } else if (
      props.userInput.genre !== "random" &&
      props.userInput.year === "random"
    ) {
      // movie/serial >>> + genre - year = random
      console.log("film/serial >>> + gatunek - rok = random");
    } else {
      // film/serial >>> + year + genre
      console.log("film/serial >>> + rok + gatunek");
    }
  }, [
    props.category,
    props.userInput,
    props.userInput.category,
    props.userInput.year,
    props.userInput.genre,
  ]);

  //   setTimeout(() => {
  //     props.changeScreen(3);
  //   }, 2500);

  return (
    <div className="progress">
      <CircularProgress color="secondary"></CircularProgress>
      <h1>
        Looking{" "}
        <span
          className="type-content"
          style={{
            fontStyle: "italic",
            textDecoration: "underline",
            textShadow: "2px 2px 10px #d78e2e",
          }}
        >
          {category.toUpperCase()}
        </span>{" "}
        for you!{" "}
      </h1>
      <span>😎</span>
    </div>
  );
};

export default LoadingScreen;
