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
import { useState } from "react";

const StartScreen = () => {
  const [filterValue, setFilterValue] = useState({
    category: "",
    type: "",
  });
  const [isCategory, setIsCategory] = useState(false);
  const [cardDisplay, setCardDisplay] = useState("default");

  //////////////////////////////////////////////////
  //THEME
  //////////////////////////////////////////////////
  const btnStyle = clsx(useBackgroundStyle().root);
  const selectStyle = clsx(useSelectStyle().root);
  const labelStyle = clsx(useLabelStyle().root);
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  const handeSubmit = (e) => {
    e.preventDefault();
    if (filterValue.category === "") {
      alert("test");
    }
  };

  // const handleSelect = (e) => {
  //   if (!isCategory) {
  //     setFilterValue({
  //       category: e.target.value,
  //       type: "random",
  //     });
  //     setIsCategory(true);
  //   } else {
  //     setFilterValue({
  //       category: filterValue.category,
  //       type: e.target.value,
  //     });
  //   }
  // };

  const handleCategory = (e) => {
    if (filterValue.type !== "") {
      setFilterValue({
        category: e.target.value,
        type: filterValue.type,
      });
    } else {
      setFilterValue({
        category: e.target.value,
        type: "random",
      });
    }
  };
  const handleType = (e) => {
    setFilterValue({
      category: filterValue.category,
      type: e.target.value,
    });
  };

  return (
    <section className="main-wrapper">
      <form onSubmit={handeSubmit} className="form">
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
          <InputLabel className={labelStyle}>Type</InputLabel>
          <Select
            name={"Type"}
            className={selectStyle}
            labelId="simple-select-label"
            id="type"
            onChange={handleType}
            value={filterValue.type}
          >
            <MenuItem value={"random"}>Random</MenuItem>
            <MenuItem value={"test1"}>Test1</MenuItem>
            <MenuItem value={"test2"}>Test2</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" className={btnStyle}>
          START
        </Button>
      </form>
    </section>
  );
};

export default StartScreen;

const useBackgroundStyle = makeStyles({
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
    borderColor: "red",
  },
});
