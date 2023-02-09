 import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from "Api";
import { Link, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { List, Item, Img, Paragraph, Title} from './MoviesList.styled';


export const MoviesList = ({movies}) => {

  const [detailsMovies, setdetailsMovies] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  const {id} = useParams();

  useEffect(() => {
   async function fetchMoovMoviesEffect() {
    console.log('я тут');

      try {
        const data = await fetchMoviesDetails(id);

        setdetailsMovies(data);
         console.log('MovieDetails', data);
        } catch (error) {
          setError('Something went wrong:(');
        } finally {
        }
     }
     fetchMoovMoviesEffect();
    }, [id])


  return (
    <>
    <h1>jghhghgh</h1>
    {detailsMovies === null && (
      <List>
      {movies.map(({movie}) => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={ {from: location } } >
            <MovieInfo
             movie={movie}
            />
          </Link>
        </Item>
          ))}
      </List>
      )}
      </>
  );
}
