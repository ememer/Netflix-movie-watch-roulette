import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  LinearProgress,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import clsx from "clsx";
import "./StartScreen.css";
import { useEffect, useState } from "react";

const StartScreen = () => {
  const [filterValue, setFilterValue] = useState({
    category: "",
    year: "",
    genre: "",
  });
  const [genres, setGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  //////////////////////////////////////////////////
  //THEME
  //////////////////////////////////////////////////
  const btnStyle = clsx(useButtonStyle().root);
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  useEffect(() => {
    fetch(
      "https://unogsng.p.rapidapi.com/search?start_year=1972&orderby=rating&limit=100&countrylist=78&offset=0&end_year=2020",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "375995c1famsh38e147a788b1bacp115fd9jsn82cc7bb4b221",
          "x-rapidapi-host": "unogsng.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      //Setting data from API, delate and sort value from data
      .then((dataApi) => {
        // Hide loading data animation
        setIsDataLoaded(true);
        const dataArray = dataApi.results.map((data) => data.year);
        //Return new array without duplicate values
        const uniqueValueData = [...new Set(dataArray)];
        //Sort returned array by values
        setMovieList(uniqueValueData.sort());
      })
      .catch((err) => {
        console.error(err);
      });

    fetch("https://unogsng.p.rapidapi.com/genres", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "375995c1famsh38e147a788b1bacp115fd9jsn82cc7bb4b221",
        "x-rapidapi-host": "unogsng.p.rapidapi.com",
      },
    })
      .then((generesData) => {
        return generesData.json();
      })
      .then((genreApi) => {
        const genreArray = genreApi.results.map((data) => data.genre);
        const uniqueGenre = [...new Set(genreArray)];
        setGenres(uniqueGenre.sort());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filterValue.category === "") {
      // Will be done later
      // Popup or modal
      alert("test");
    }
  };

  const handleCategory = (e) => {
    if (filterValue.year !== "") {
      setFilterValue({
        category: e.target.value,
        year: filterValue.year,
        genre: filterValue.genre,
      });
    } else {
      setFilterValue({
        category: e.target.value,
        year: "random",
        genre: "random",
      });
    }
  };
  const handleYear = (e) => {
    setFilterValue({
      category: filterValue.category,
      year: e.target.value,
      genre: filterValue.genre,
    });
  };

  const handleGenre = (e) => {
    setFilterValue({
      category: filterValue.category,
      year: filterValue.year,
      genre: e.target.value,
    });
  };

  return (
    <>
      <section className="main-wrapper">
        {!isDataLoaded ? (
          <div className="data-loading-comm">
            <LinearProgress color="secondary" />
            <p>Stay patient - data is loading! 👌</p>
          </div>
        ) : null}
        <h1 className="title">🎥 NETFLIX ROULETTE 🎲</h1>
        <form onSubmit={handleSubmit} className="form">
          <FormControl className="label">
            <InputLabel className={labelStyle}>Category</InputLabel>

            <Select
              name="Category"
              className={selectStyle}
              labelId="simple-select-label"
              id="category"
              onChange={handleCategory}
              value={filterValue.category}
            >
              <MenuItem value={"movie"}>Movie</MenuItem>s
              <MenuItem value={"series"}>Series</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="label">
            <InputLabel className={labelStyle}>Year</InputLabel>
            <Select
              name={"Year"}
              className={selectStyle}
              labelId="simple-select-label"
              id="year"
              onChange={handleYear}
              value={filterValue.year}
            >
              <MenuItem value={"random"}>Random</MenuItem>
              {movieList.map((elem, idx) => (
                <MenuItem value={elem} key={idx}>
                  {elem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="label">
            <InputLabel className={labelStyle}>Genre</InputLabel>
            <Select
              name={"Genre"}
              className={selectStyle}
              labelId="simple-select-label"
              id="genre"
              onChange={handleGenre}
              value={filterValue.genre}
            >
              <MenuItem value={"random"}>Random</MenuItem>
              {genres.map((genre, idx) => (
                <MenuItem value={genre} key={idx}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className={btnStyle}>
            START
          </Button>
        </form>
      </section>
    </>
  );
};

export default StartScreen;

const useButtonStyle = makeStyles({
  root: {
    background: "#996726",
    width: "25rem",
    height: "5rem",
    marginTop: "5rem",
    color: "#1b1b22",

    "&:hover": {
      background: "#D78E2E",
    },
  },
});

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
