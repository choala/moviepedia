import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    const json = await response.json();

    setMovies(json.data.movies);
    setIsLoading(false);
  }

  if (isLoading) return <Loading />;

  return (
    <div>
      {
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genres={movie.genres}
            rating={movie.rating}
            imageSrc={movie.medium_cover_image}
          />
        ))
      }
    </div>
  );
}

export default Home;