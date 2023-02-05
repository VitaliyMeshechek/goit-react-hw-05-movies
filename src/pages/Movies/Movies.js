import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from "Api";
import {MovieDetails} from '..//MovieDetails/MovieDetails';


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const {id} = useParams();
  // const movies = fetchMoviesDetails()

   useEffect(() => {
   async function fetchMoovMoviesEffect() {

      try {
        const data = await fetchMoviesDetails(id);
         setMovies([...data.results]);
         console.log(data.results);

       } catch (error) {
         setError('Something went wrong:(');
      }
     }
    fetchMoovMoviesEffect()
 }, [id])

  return (
    <main>
      {movies.map((movie, id) => {
        return <MovieDetails key={id} {...movie}/>
     })}
    </main>
  );
};

// export default Movies;
