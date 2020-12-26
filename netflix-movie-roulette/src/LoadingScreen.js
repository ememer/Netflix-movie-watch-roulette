import "./LoadingScreen.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import clsx from "clsx";

const LoadingScreen = (props) => {
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);
  const [isLoad, setIsLoad] = useState(false);
  const [movieYears, setMovieYears] = useState([]);
  const [yearValue, setYearValue] = useState("random");
  const [res, setRes] = useState();
  const [resetData, setResetData] = useState(false);
  useEffect(() => {
    if (resetData) {
      getFetchData(
        ` https://unogsng.p.rapidapi.com/search?type=${props.userData.category}&start_year=${yearValue}&offset=0&end_year=${yearValue}`
      );
      console.log("FETCH");
    }

    if (resetData === false) {
      if (props.userData.genre === "random") {
        getFetchData(
          `https://unogsng.p.rapidapi.com/search?type=${props.userData.category}&offset=0`
        );
      } else {
        getFetchData(
          `https://unogsng.p.rapidapi.com/search?type=${props.userData.category}&genrelist=${props.userData.genre}&offset=0`
        );
      }
    }

    function getFetchData(fetchCase) {
      fetch(`${fetchCase}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "375995c1famsh38e147a788b1bacp115fd9jsn82cc7bb4b221",
          "x-rapidapi-host": "unogsng.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          props.getResponse(data);
          setMovieYears([...new Set(data.results.map((items) => items.year))]);
          setIsLoad(true);
          console.log(yearValue);
          setRes(data);
        })

        .catch((err) => {
          console.error(err);
        });
    }

    if (yearValue !== "random") {
      setResetData(true);
      console.log("dipa");
    } else {
      setIsLoad(false);
      console.log("dupa");
    }
  }, [props.userData.genre, resetData, yearValue]);

  //   setTimeout(() => {
  //     props.changeScreen(3);
  //   }, 2500);

  const handleYear = (e) => {
    setYearValue(e.target.value);
  };

  return (
    <div className="progress">
      {!isLoad ? <CircularProgress color="secondary"></CircularProgress> : null}
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
          {props.userData.category.toUpperCase()}
        </span>{" "}
        for you!{" "}
      </h1>
      <span>😎</span>
      {isLoad ? (
        <FormControl className="label">
          <InputLabel className={labelStyle}>Year</InputLabel>
          <Select
            name={"Year"}
            className={selectStyle}
            labelId="simple-select-label"
            id="year"
            onChange={handleYear}
            value={yearValue}
          >
            <MenuItem value={"random"}>Random</MenuItem>
            {movieYears.map((elem, idx) => (
              <MenuItem value={elem} key={idx}>
                {elem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </div>
  );
};

export default LoadingScreen;

const useSelectStyle = makeStyles({
  root: {
    margin: "5rem 0rem",
    fontSize: "1.2rem",
    color: "#84817D",
    background: "rgba(132, 129, 125, 0.02)",
    borderRadius: "5px",
  },
});

const useLabelStyle = makeStyles({
  root: {
    color: "#84817D",
  },
});
