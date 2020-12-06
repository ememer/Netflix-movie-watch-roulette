import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import clsx from "clsx";
import "./StartScreen.css";

const StartScreen = () => {
  //////////////////////////////////////////////////
  //THEME
  //////////////////////////////////////////////////
  const btnStyle = clsx(useBackgroundStyle().root);
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  return (
    <section className="main-wrapper">
      <form className="form">
        <FormControl className="label">
          <InputLabel className={labelStyle} id="simple-select-label">
            Category
          </InputLabel>
          <Select
            className={selectStyle}
            labelId="simple-select-label"
            id="simple-select"
          >
            <MenuItem value={10}>Movie</MenuItem>
            <MenuItem value={20}>Series</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="label">
          <InputLabel className={labelStyle} id="simple-select-label">
            Type
          </InputLabel>
          <Select
            className={selectStyle}
            labelId="simple-select-label"
            id="simple-select"
          >
            <MenuItem value={10}>Random</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" className={btnStyle}>
          START
        </Button>
      </form>
    </section>
  );
};

export default StartScreen;

const useBackgroundStyle = makeStyles({
  root: {
    background: "#D78E2E",
    color: "white",
    width: "25rem",
    height: "5rem",
    marginTop: "5rem",
    color: "#1b1b22",

    "&:hover": {
      background: "#996726",
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
    borderColor: "red",
  },
});
