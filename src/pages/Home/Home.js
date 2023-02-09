import { toast } from 'react-toastify';

import { useState, useEffect, Suspense } from 'react';
import { fetchMoviesTrending } from "Api";
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Title, List, Item, TitleCard, Img, Paragraph } from './Home.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MoviesList } from 'components/MoviesList/MoviesList';



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
          setMovies(data);
          console.log('Home', data);

        } catch (error) {
          setError(toast.error('Something went wrong:('));
        } finally {
          setIsLoading(false);
        }
      }
      fetchMoviesEffect()
  }, [])

// console.log(movies);
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






