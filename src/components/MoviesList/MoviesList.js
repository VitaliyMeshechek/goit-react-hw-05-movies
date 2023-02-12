// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { List, Item } from './MoviesList.styled';


  const MoviesList = ({movies}) => {

  const location = useLocation();


  return (
    <>
      <List>
      {movies.map(({id, title, vote_average, poster_path}) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={ {from: location } }>
            <MovieInfo
             title={title}
             vote_average={vote_average}
             poster_path={poster_path}
            />
          </Link>
        </Item>
          ))}
      </List>
      </>
  );
}

export default MoviesList;

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       vote_average: PropTypes.number.isRequired,
//       title: PropTypes.string,
//       poster_path: PropTypes.string,
//     })
//   ).isRequired,
// };
