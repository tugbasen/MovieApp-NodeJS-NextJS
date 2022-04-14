import axios from "axios";

import MovieDetail from "../../components/movieDetail/MovieDetails";

export default function MovieDetailPage(props) {
  const { movie, casts } = props
  //console.log(movie)
  console.log(casts)
  return (
    <MovieDetail movie={movie} casts={casts} />
  );
}

export async function getStaticProps(context) {
  const { id } = context.params

  const res = await axios(`http://localhost:5000/movie/${id}`)
  const movie = res.data.movie[0]

  const response = await axios(`http://localhost:5000/movie/${id}`)
  const casts = response.data.casts[0].casts

  return {
      props: {
        movie,
        casts
      }
  }
}

export async function getStaticPaths() {
  const res = await axios(`http://localhost:5000`)
  const movies = res.data

  const ids = movies.map(movie => movie.movieId)
  const paths = ids.map(id => ({ params: { id : id.toString() }} ))

  return {
    paths,
    fallback: false
  }
}