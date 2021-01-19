import "./LoadingScreen.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import clsx from "clsx";
import { useSelectStyle, useLabelStyle } from "./config/config";

const LoadingScreen = (props) => {
  ///////////THEME
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);

  ///////////////
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieYears, setMovieYears] = useState([]);
  const [yearValue, setYearValue] = useState("random");
  const [resetData, setResetData] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    if (resetData) {
      if (props.userData.genre === "random") {
        getFetchData(
          `https://unogsng.p.rapidapi.com/search?type=${props.userData.category}&start_year=${yearValue}&end_year=${yearValue}`
        );
      } else {
        getFetchData(
          `https://unogsng.p.rapidapi.com/search?genrelist=${props.userData.genre}&type=${props.userData.category}&start_year=${yearValue}&end_year=${yearValue}`
        );
      }
    }

    if (!isLoaded) {
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
          const dataYearsValue = data.results.map((items) => items.year);
          setMovieYears([...new Set(dataYearsValue.sort())]);
          setIsLoaded(true);
        })

        // zmiana ekranu po załadowaniu
        .then(() => {
          if (isFiltered) {
            setIsFiltered(false);
            props.nextScreen(3);
            setTimeout(() => {}, 500);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    if (yearValue !== "random") {
      setResetData(true);
      setIsFiltered(true);
    } else {
      setIsLoaded(false);
    }
  }, [props.userData.genre, resetData, yearValue]);

  const handleYear = (e) => {
    setYearValue(e.target.value);
  };

  return (
    <div className="progress">
      {!isLoaded ? (
        <CircularProgress color="secondary"></CircularProgress>
      ) : null}
      <h1>
        We looking{" "}
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
      {isLoaded ? (
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
            <MenuItem value={"random"}>Choose</MenuItem>
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
