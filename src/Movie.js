import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres }) {
    return(
        <div className="movies__movie">
            <div className="movie__img">
                <img src={poster} alt={title} title={title}></img>
            </div>
            <div className="movie__data">
                <h3 className="movie__title" >{title} ({year})</h3>
                <p className="genres">{genres}</p>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;