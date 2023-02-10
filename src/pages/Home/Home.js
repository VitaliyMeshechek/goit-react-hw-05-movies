import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from "Api";
import { Link, useLocation } from 'react-router-dom';
import { Title, List, Item } from './Home.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';




export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchMoviesEffect() {
      setIsLoading(true);
        try {
          const data = await fetchMoviesTrending();
            setMovies(data.results);
            // console.log('Home', data.results);

        } catch (error) {
          setError(toast.error('Something went wrong:('));
        } finally {
          setIsLoading(false);
        }
      }
      fetchMoviesEffect()
  }, [])

  return (
    <main>
      <Title>Trending Today</Title>
          <List>
          {movies.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`} state={{ from: location }}>
            <Item >
              <MovieInfo movie={item}/>
            </Item>
          </Link>
      ))}
    </List>
    </main>
  );
};






