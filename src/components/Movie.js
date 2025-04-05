import PropTypes from "prop-types";

function Movie({ title, genres, rating, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <h2>{title} ({rating})</h2>
      {
        genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))
      }
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default Movie;