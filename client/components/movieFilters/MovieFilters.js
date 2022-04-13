import classes from "./MovieFilters.module.css";
import * as S from "../styles";

function MovieFilters() {
  return (
    <S.MovieFilters>
    <div className={classes.movieFilters}>
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm " style={{width :'100%', textAlign: "start"}}>
        <button type="button" className="btn btn-white">
          <b style={{fontSize: 14}}>Sort</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{textAlign: 'end', width: 'auto'}}
        ></button>
        <ul className="dropdown-menu"><li>Actions</li></ul>
      </div>
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm" style={{width :'100%', textAlign: "start"}}>
        <button type="button" className="btn btn-white">
          <b style={{fontSize: 14}}>Filters</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{textAlign: 'end', width: 'auto'}}
        ></button>
        <ul className="dropdown-menu"><li>Actions</li></ul>
      </div>
      <div className="btn-group dropend border border-1 rounded mb-3 shadow-sm" style={{width :'100%', textAlign: "start"}}>
        <button type="button" className="btn btn-white">
          <b style={{fontSize: 14}}>Where To Watch</b>
        </button>
        <button
          type="button"
          className="btn btn-white dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{textAlign: 'end', width: 'auto'}}
        ></button>
        <ul className="dropdown-menu"><li>Actions</li></ul>
      </div>
      <button className={classes.searchButton} style={{textAlign: 'center'}}>
          <b>Search</b>
      </button>
    </div>
    </S.MovieFilters>
  );
}

export default MovieFilters;