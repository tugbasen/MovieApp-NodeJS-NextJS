import classes from "./MovieDetails.module.css";
import { Fragment } from "react";
import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import MoviePreview from "./MoviePreview";

import * as S from "../styles";
import CastCard from "./CastCard";

function MovieDetail({ movie, casts }) {
  // console.log(casts)

  return (
    <S.MovieDetails>
    <div className="container">
        <MoviePreview movie={movie} />
        <div className="container">
          <Row>
            <Col xs={9}>
              <div>
                <h3>Series Casts</h3>
                <div className={`${classes.casts} card-group grid`} >
                  {casts &&
                    casts.map((cast) => (
                      <React.Fragment key={cast.cast_id}>
                        {cast.profile_path && (
                          <CastCard
                            image={`${cast.profile_path}`}
                            casts={cast}
                          />
                        )}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <AiFillFacebook size={20} />
                  </span>
                  <span style={{ marginRight: 10 }}>
                    <AiOutlineTwitter size={20} />
                  </span>
                  <span style={{ marginRight: 10 }}>
                    <AiOutlineInstagram size={20} />
                  </span>
                  <span>
                    <BsLink size={20} />
                  </span>
                </div>
                <p style={{ marginTop: 10 }}>
                  <b>Facts</b>
                </p>
                <p>
                  <b>Status</b>
                  <br />
                  <span>Returning Series</span>
                </p>

                <p>
                  <b>Network</b>
                  <br />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/767px-American_Broadcasting_Company_Logo.svg.png"
                    height={30}
                  />
                </p>
                <p>
                  <b>Type</b>
                  <br />
                  <span>Scripted</span>
                </p>
                <p>
                  <b>Original Language</b>
                  <br />
                  <span>English</span>
                </p>
                <p>
                  <b>Keywords</b>
                  <br />
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    nurse
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    san francisco, california
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    austim
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medicine
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    remake
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    hospital
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medical drama
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    medical
                  </button>
                  <button className="keywordsButtons border border-1 rounded mb-3 shadow-sm">
                    based on tv series
                  </button>
                </p>
              </div>
            </Col>
          </Row>
        </div>
    </div>
    </S.MovieDetails>
  );
}

export default MovieDetail;
