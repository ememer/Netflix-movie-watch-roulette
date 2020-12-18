import "./LoadingScreen.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";

const LoadingScreen = (props) => {
  const [category, setCategory] = useState();
  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);

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
