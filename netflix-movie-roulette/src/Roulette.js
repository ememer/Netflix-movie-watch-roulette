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
  ////////////////////////////////

  useEffect(() => {
    const getFilteredResponse = (propsResponse) => {
      const drawnResult = Math.floor(
        Math.random() * (parseInt(propsResponse) - 0 + 1)
      );
      console.log("res", drawnResult);
      console.log(props.response.results[drawnResult]);
      setDrawValue({
        img: props.response.results[drawnResult].poster,
        title: props.response.results[drawnResult].title,
        synopsis: props.response.results[drawnResult].synopsis,
        runtime: props.response.results[drawnResult].runtime,
        year: props.response.results[drawnResult].year,
        imdb:
          props.response.results[drawnResult].imdbrating !== null
            ? props.response.results[drawnResult].imdbrating
            : "No specify",
        type: props.response.results[drawnResult].vtype,
      });
    };

    getFilteredResponse(props.response.results.length);
  }, [props.response]);

  return (
    <div className="roulette">
      <Grid container>
        <Grid container spacing={2}>
          <Grid item lg={5} md={6} xs={12}>
            <Paper className={paperStyle}>
              <CardMedia
                style={{
                  maxHeight: "50vh",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                component="img"
                image={drawnValue.img}
              />
            </Paper>
          </Grid>

          <Grid item lg={7} md={6} xs={12}>
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
              <Grid item>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.synopsis}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.type}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.year}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>{drawnValue.imdb}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
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

const message =
  "The remaining space is the size of the flex container minus the size of all flex items' sizes together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.";
