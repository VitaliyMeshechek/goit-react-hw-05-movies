import { useParams } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from 'Api';
import { ThreeCircles } from 'react-loader-spinner';



export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {id} = useParams();

   useEffect(() => {
   async function fetchMoovMoviesEffect() {
    setIsLoading(true);

      try {
        const data = await fetchMoviesDetails(id);

         setMovies(data);
        //  console.log('MovieDetails', data);
        } catch (error) {
          setError('Something went wrong:(');
        } finally {
          setIsLoading(false);
        }
     }
    fetchMoovMoviesEffect()
 }, [id])

  return (
    <>
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
    {!isLoading && movies && !error && <MovieCard movie={movies} />}
    {/* {!isLoading && movies && <AdditionalInfo />} */}
    {error && <h2>{error}</h2>}
    </>
  )
};
