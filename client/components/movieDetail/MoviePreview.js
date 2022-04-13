import classes from "./MoviePreview.module.css";
import Image from "next/image";

import { Row, Col } from "react-bootstrap";
import { BsCardList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

import MovieDetailScore from "./MovieDetailScore";
import * as S from "../styles";

function MoviePreview({ movie }) {
  // console.log(movie);
  return (
    <div className={classes.movieSummary}>
      <div className={classes.movieBackdrop}>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          className={classes.imageBackdrop}
        />
        <div className="container ">
          <Row className={classes.rowPart}>
            <Col xs={3}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                className={classes.imagePoster}
              />
            </Col>
            <Col xs={9}>
              <div className={classes.aboutMovie}>
                <div>
                  <span className={classes.detailMovieTitle}>
                    {movie.original_title}{" "}
                  </span>
                  <span>({new Date(movie.release_date).getFullYear()})</span>
                </div>
                <div style={{ marginTop: 5 }}>
                  <span className={classes.detailBox}>TV-14</span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    {"\u25CF"}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {movie?.genres?.map((item) => item.name).join(", ")}
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    {"\u25CF"}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {(movie.runtime / 60).toFixed()}h{" "}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {movie.runtime % 60}min{" "}
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <span>
                    <MovieDetailScore movies={movie} />
                  </span>
                  <span style={{ position: "absolute", marginTop: 15 }}>
                  <S.MoviePreview>
                      <span className={classes.userScore}>
                        User <br /> Score
                      </span>
                      <span className={classes.tags}>
                        <BsCardList size={18} />
                      </span>
                      <span className={classes.tags}>
                        <FaHeart size={18} />
                      </span>
                      <span className={classes.tags}>
                        <MdBookmarkAdd size={18} />
                      </span>
                      <span className={classes.tags}>
                        <AiFillStar size={18} />
                      </span>
                      <span style={{ marginLeft: 30 }}>
                        <BsFillPlayFill />
                      </span>
                      <span>Play Trailer</span>
                      </S.MoviePreview>
                  </span>
                </div>
                <div className={classes.tagline}>
                  <i>{movie.tagline}</i>
                </div>
                <div>
                  <div style={{ fontSize: 15, marginBottom: 10 }}>
                    <b>Overview</b>
                  </div>
                  <div style={{ fontSize: 15 }}>{movie.overview}</div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <div>
                    <b>
                      {movie?.production_companies?.map((item) => item.name).join(", ")}
                    </b>
                  </div>
                  <div>Director</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MoviePreview;
