import classes from "./MovieList.module.css";

import MovieCard from "../movieCard/MovieCard";

function MovieList({ movies }) {
  return (
    <div className={classes.movieContainer}>
      {movies &&
        movies.map((movie) => <MovieCard movies={movie} key={movie._id} />)}
    </div>
  );
}

export default MovieList;
