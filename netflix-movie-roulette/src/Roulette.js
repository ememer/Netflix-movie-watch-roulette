import "./Roulette.css";
import {
  Paper,
  Grid,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const Roulette = (props) => {
  const [drawnValue, setDrawValue] = useState({
    img: "loading",
    title: "loading",
    synopsis: "loading",
    runtime: "loading",
    year: "loading",
    imdb: "loading",
    type: "loading",
  });
  ////////////////////////////////
  ///////////THEME///////////////
  const paperStyle = clsx(usePaperStyle().paper);
  const btnStyle = clsx(useButtonStyle().root);

  ////////////////////////////////

  useEffect(() => {
    // const getFilteredResponse = (propsResponse) => {
    //   const drawnResult = Math.floor(
    //     Math.random() * (parseInt(propsResponse) - 0 + 1)
    //   );

    //   setDrawValue({
    //     img:
    //       props.response.results[drawnResult].poster.includes("http") ||
    //       props.response.results[drawnResult].poster !== null ||
    //       props.response.results[drawnResult].poster !== "N/A"
    //         ? props.response.results[drawnResult].poster
    //         : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`,
    //     title: props.response.results[drawnResult].title,
    //     synopsis: props.response.results[drawnResult].synopsis,
    //     runtime:
    //       props.response.results[drawnResult].runtime !== 0
    //         ? props.response.results[drawnResult].runtime
    //         : `N/A`,
    //     year: props.response.results[drawnResult].year,
    //     imdb:
    //       props.response.results[drawnResult].imdbrating !== null
    //         ? props.response.results[drawnResult].imdbrating
    //         : `N/A`,
    //     type: props.response.results[drawnResult].vtype,
    //   });
    // };
    // getFilteredResponse(props.response.results.length);

    function getFilteredResponse(objectLength) {
      return new Promise((resolve, reject) => {
        if (objectLength !== 0) {
          resolve(Math.floor(Math.random() * (parseInt(objectLength) - 1 + 1)));
        } else {
          reject("Can't load data");
        }
      });
    }

    const fillContent = getFilteredResponse(props.response.results.length);
    fillContent
      .then((number) => {
        console.log(props.response.results.length);
        console.log(number);
        setDrawValue({
          img:
            props.response.results[number].poster.includes("http") ||
            props.response.results[number].poster !== null ||
            props.response.results[number].poster !== "N/A"
              ? props.response.results[number].poster
              : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`,
          title: props.response.results[number].title,
          synopsis: props.response.results[number].synopsis,
          runtime:
            props.response.results[number].runtime !== 0
              ? props.response.results[number].runtime
              : `N/A`,
          year: props.response.results[number].year,
          imdb:
            props.response.results[number].imdbrating !== null
              ? props.response.results[number].imdbrating
              : `N/A`,
          type: props.response.results[number].vtype,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [props.response]);

  return (
    <div className="roulette">
      <Grid container>
        <Grid container spacing={5}>
          <Grid item lg={2} md={6} xs={12}>
            <Paper className={paperStyle}>
              <CardMedia
                style={{
                  maxWidth: "100%",
                  maxHeight: "100% ",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                component="img"
                image={drawnValue.img}
              />
            </Paper>
          </Grid>

          <Grid item lg={10} md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <Paper className={paperStyle}>
                  <Typography
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    {drawnValue.title}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item lg={12}>
                <h1>Synopsis</h1>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.synopsis}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <h1>Type</h1>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.type}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <h1>Year of release</h1>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.year}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <h1>IMDB RATING</h1>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.imdb}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <h1>Length of time</h1>
                <Paper className={paperStyle}>
                  <Typography>
                    {(`${drawnValue.runtime}` / 3600).toFixed(2)}h
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => props.prevScreen(0)}
          variant="contained"
          className={btnStyle}
        >
          Search again
        </Button>
      </Grid>
    </div>
  );
};

export default Roulette;

const usePaperStyle = makeStyles((theme) => ({
  root: {
    border: "1px solid red",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

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
