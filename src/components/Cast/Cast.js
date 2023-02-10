import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'Api';
import { Wrraper, Container, List, Title, Text } from './Cast.styled';
import { Profile } from 'components/Profile/Profile';


export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMoviesCreditsEffect() {
      try {
        const castData  = await fetchMovieCredits(id);

        if(castData.cast.length > 0) {
          setCast(castData.cast);
          console.log(castData.cast);
        }

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
          {cast.map(({ name, profile_path, character }) => (
            <li key={name}>
              <Profile profile_path={profile_path} name={name} character={character} />
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


Cast.propTypes = {
  cast: PropTypes.arrayOf(
      PropTypes.shape({
          character: PropTypes.string.isRequired,
          profile_path: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
      })
  )
};
