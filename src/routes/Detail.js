import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();

    setMovie(json.data.movie);
    setIsLoading(false);
  }

  if (isLoading) return <Loading />;

  return (
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      genres={movie.genres}
      rating={movie.rating}
      imageSrc={movie.medium_cover_image}
    />
  );
}

export default Detail;