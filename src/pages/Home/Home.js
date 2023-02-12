import { ThreeCircles } from 'react-loader-spinner';
// import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from "Api";
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';


  const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMoviesEffect() {
      setIsLoading(true);
        try {
          const data = await fetchMoviesTrending();
            setMovies(data.results);
            // console.log('Home', data.results);

        } catch (error) {
          setError('Something went wrong:(');
        } finally {
          setIsLoading(false);
        }
      }
      fetchMoviesEffect()
  }, [])

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
      <Title>Trending Today</Title>
      {movies && <MoviesList movies={movies}/>}
    {error && <h2>{error}</h2>}
    </main>
  );
};

export default Home;



