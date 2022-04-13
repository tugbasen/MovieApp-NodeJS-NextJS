import classes from './MovieDetailScore.module.css';
import {
  CircularProgress,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { AiOutlinePercentage } from "react-icons/ai";

function MovieDetailScore({movies}) {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);
  return (
    <Box position="relative" display="inline-block" className={classes.score}>
      <Box position="absolute">
        <CircularProgress
          className={classes.firstCircule}
          size={50}
          variant="determinate"
          value={100}
        />
      </Box>
      <CircularProgress
        size={50}
        className={classes.circule}
        variant="determinate"
        value={movies.vote_average * 10}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WhiteTextTypography style={{ fontSize: "13px" }} variant="h6">
          {`${movies.vote_average * 10}`}
          <AiOutlinePercentage style={{ paddingBottom: "5px" }} />
        </WhiteTextTypography>
      </Box>
    </Box>
  );
}

export default MovieDetailScore;
