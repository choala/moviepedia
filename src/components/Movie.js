import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, genres, rating, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({rating})
        </Link>
      </h2>
      {
        genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))
      }
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default Movie;