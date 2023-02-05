import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from "Api";
import { Link } from 'react-router-dom';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // const moviesList = fetchMoviesTrending();
  // console.log(moviesList);

  useEffect(() => {
    async function fetchMoviesEffect() {

        try {
          const data = await fetchMoviesTrending();
          setMovies([...data.results]);
          console.log([data.results]);

        } catch (error) {
          setError('Something went wrong:(');
        }
      }
      fetchMoviesEffect()
  }, [])

  return (
    <main>
      <div>
        <h1>Trending Today</h1>
          {movies.map(movie => (<Link key={movie.id} to={`/movies/${movie.id}`}>
            <li>{movie.title}</li>
          </Link>
          ))}
      </div>
    </main>
  );
};







