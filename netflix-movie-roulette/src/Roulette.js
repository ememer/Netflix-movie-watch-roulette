import "./Roulette.css";
import {
  Card,
  Paper,
  Grid,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

const Roulette = () => {
  const paperStyle = clsx(usePaperStyle().paper);

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
                image="https://miro.medium.com/max/3000/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              />
            </Paper>
          </Grid>

          <Grid item lg={7} md={6} xs={12}>
            <Paper className={paperStyle}>
              <Typography>{message}</Typography>
            </Paper>
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
