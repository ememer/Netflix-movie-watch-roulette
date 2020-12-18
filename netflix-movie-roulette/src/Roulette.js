import "./Roulette.css";
import {
  Paper,
  Grid,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

const Roulette = () => {
  ////////////////////////////////
  ///////////THEME///////////////
  const paperStyle = clsx(usePaperStyle().paper);
  ////////////////////////////////

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
                image="https://chillycube.pl/images/img14.jpg"
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
                    title
                  </Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={paperStyle}>
                  <Typography>{message}</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>Type</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>Year</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>Rating imbd</Typography>
                </Paper>
              </Grid>
              <Grid item lg={3} xs={3}>
                <Paper className={paperStyle}>
                  <Typography>Run time</Typography>
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
