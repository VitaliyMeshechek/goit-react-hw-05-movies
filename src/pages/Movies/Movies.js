import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from "Api";
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';

// import {MovieDetails} from '..//MovieDetails/MovieDetails';
// import { BackLink } from 'components/BackLink/BackLink';
// import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Title, List, Item } from './Movies.styled';






export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query' ?? '');

  // const location = useLocation();

   useEffect(() => {
    async function fetchSearchMoviesEffect() {
      if (query === '') return;

      try {
        setIsLoading(true);

        const data = await fetchSearchMovies(query);

        if (data.length === 0) {
          toast.info('Search results did not match any movies! Enter a different name.', {
            autoClose: 3000,
          });
        }
         setMovies(data);
         console.log('Movies', data);

       } catch (error) {
        setError(toast.error('Something went wrong:('));
      } finally {
        setIsLoading(false);
      }
     }
     fetchSearchMoviesEffect()
 }, [query])


 const updateQueryString = movieName => {
  setSearchParams(movieName !== '' ? { query: movieName } : {});
};

  return (
    <main>
    {!isLoading && <SearchMovie onSubmit={updateQueryString} />}
      {!isLoading && query !== null && <MoviesList movies={movies} />}
      {error && <h2>{error}</h2>}
    </main>
  );
};

// export default Movies;
