import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from "Api";
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

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
         setMovies(data.results);
         console.log('Movies', data.results);

       } catch (error) {
        setError('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
     }
     fetchSearchMoviesEffect()
 }, [query])


 const onSearchParams = searchMovie => {
  setSearchParams(searchMovie !== '' ? { query: searchMovie } : {});
};

  return (
    <main>
    {isLoading && (
      <ThreeCircles
      height="100"
      width="100"
      color="rgb(255, 69, 0)"
      wrapperStyle={{ display: 'flex', justifyContent:  'center' }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
      />
    )}
    {!isLoading && <SearchMovie onSubmit={onSearchParams} />}
      {!isLoading && query !== null && <MoviesList movies={movies} />}
      {error && <h2>{error}</h2>}
    </main>
  );
};

// export default Movies;
