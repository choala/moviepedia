import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres, ytcode }) {
    return(
        <Link
        to={{
            pathname: "/movie-detail",
            state: {
                year, title, summary, poster, genres
            }
        }}>
        <div className="movies__movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title" >{title} ({year})</h3>
                <p className="genres">{genres}</p>
                <p className="movie__summary">{summary}</p>
            </div>
            
        </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    ytcode: PropTypes.string
};

export default Movie;