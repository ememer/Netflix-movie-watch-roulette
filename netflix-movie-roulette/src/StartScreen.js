import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@material-ui/core";
import clsx from "clsx";
import "./StartScreen.css";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { useButtonStyle, useSelectStyle, useLabelStyle } from "./config/config";
import { genreList } from "./config/genreList";

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
