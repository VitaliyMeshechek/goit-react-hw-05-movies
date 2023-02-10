import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from "Api";
import { Link, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { List, Item } from './MoviesList.styled';


export const MoviesList = ({movies}) => {

  const [detailsMovies, setdetailsMovies] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  const {id} = useParams();

  useEffect(() => {
   async function fetchMoovMoviesEffect() {

      try {
        const data = await fetchMoviesDetails(id);
        if(data.results.length > 0) {
          setdetailsMovies(data.results);
          console.log('MovieDetails', data.results);
        }
        } catch (error) {
          setError('Something went wrong:(');
        } finally {
        }
     }
     fetchMoovMoviesEffect();
    }, [id])


  return (
    <>
    {detailsMovies === null && (
      <List>
      {movies.map(({movie}) => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={ {from: location } }>
            <MovieInfo
             movie={movie}
            />
            {movie.title}
          </Link>
        </Item>
          ))}
      </List>
      )}
      </>
  );
}


MoviesList.propType = {
  onSubmit: PropTypes.func.isRequired,
};
