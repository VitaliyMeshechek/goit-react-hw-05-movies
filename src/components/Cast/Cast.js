import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'Api';
import { Wrraper, Container, List, Title, Text } from './Cast.styled';
import Profile from 'components/Profile/Profile';


  const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMoviesCreditsEffect() {
      try {
        const data  = await fetchMovieCredits(id);

        let newObjectCast = [];
        const results = data.cast;
        const filterName = results.map(result => result.name);
        const actorsName = Array.from(new Set(filterName));
        actorsName.forEach(name => {
        newObjectCast.push(results.find(result => result.name === name))
        })

        setCast(newObjectCast);

      } catch (error) {
        setError('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesCreditsEffect();
  }, [id]);

  return (
    <Wrraper>
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
      <Container>
        <List>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <Profile profile_path={profile_path} name={name} />
              <Title>{name}</Title>
              <Text>{character}</Text>
            </li>
          ))}
        </List>
        {error && <h2>We don't have any reviews for this movie</h2>}
      </Container>
    </Wrraper>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          character: PropTypes.string.isRequired,
          profile_path: PropTypes.string.isRequired,
          name: PropTypes.string,
      })
  )
};
