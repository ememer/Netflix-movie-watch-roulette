import { makeStyles } from "@material-ui/core";

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

export { useButtonStyle, useLabelStyle, useSelectStyle, usePaperStyle };
