import MovieList from "../components/movieList/MovieList";

import MovieFilters from "../components/movieFilters/MovieFilters";

export default function HomePage({movies}) {
     console.log(movies)
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <MovieFilters />
        </div>
        <div className="col-10">
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async() => {
    const res = await fetch(`http://localhost:5000`)
    const movies = await res.json()
    // const movies = await data.movie

    return {
        props: {
            movies,
        }
    }
}