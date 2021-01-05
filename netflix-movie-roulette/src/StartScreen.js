import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
} from "@material-ui/core";
import clsx from "clsx";
import "./StartScreen.css";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

const StartScreen = (props) => {
  const [genres] = useState(genreList);
  const [filterValue, setFilterValue] = useState({
    category: "",
    genre: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  //////////////////////////////////////////////////
  //THEME
  //////////////////////////////////////////////////
  const btnStyle = clsx(useButtonStyle().root);
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filterValue.category === "") {
      setIsOpen(true);
      return;
    }
    //Setting screen render n inform user which category chose
    props.nextScreen(2);
    props.userDataInput(filterValue);
  };

  const handleCategory = (e) => {
    if (filterValue.genre !== "") {
      setFilterValue({
        category: e.target.value,
        genre: filterValue.genre,
      });
    } else {
      setFilterValue({
        category: e.target.value,
        genre: "random",
      });
    }
  };

  const handleGenre = (e) => {
    setFilterValue({
      category: filterValue.category,
      genre: e.target.value,
    });
  };

  const handleClosePopUp = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="main-wrapper">
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={handleClosePopUp}
        >
          <Alert
            style={{
              padding: "10px, 15px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            onClose={handleClosePopUp}
            severity="error"
            variant="filled"
            elevation={1}
          >
            👀 You need to choose the category !
          </Alert>
        </Snackbar>

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
              {genres.map((genre) => (
                <MenuItem value={genre.netflixId} key={genre.netflixId}>
                  {genre.genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className={btnStyle}>
            Search
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
    display: "flex",
    justifyContent: "space-around",
  },
});

const useLabelStyle = makeStyles({
  root: {
    color: "#84817D",
  },
});

const genreList = [
  { genre: "Action & Adventure", netflixId: 1365 },
  { genre: "Anime", netflixId: 7424 },
  { genre: "Children & Family", netflixId: 783 },
  { genre: "Classic", netflixId: 31574 },
  { genre: "Comedies", netflixId: 6548 },
  { genre: "Documentaries", netflixId: 6839 },
  { genre: "Dramas", netflixId: 5763 },
  { genre: "Horror", netflixId: 8711 },
  { genre: "Music", netflixId: 1701 },
  { genre: "Romantic", netflixId: 8883 },
  { genre: "Sci-fi & Fantasy", netflixId: 1492 },
  { genre: "Sports", netflixId: 4370 },
  { genre: "Thrillers", netflixId: 8933 },
  { genre: "TV Shows", netflixId: 83 },
];
