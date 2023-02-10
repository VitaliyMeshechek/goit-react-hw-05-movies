import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'Api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMoviesCreditsEffect() {
      try {
        const cast  = await fetchMovieCredits(id);
        // const castData = await cast.map(
        //   ({ name, profile_path, character }) => ({
        //     name,
        //     profile_path,
        //     character,
        //   })
        // );
        setCast(cast);
        console.log(cast);
      } catch (error) {
        setError(toast.error('Something went wrong:('));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesCreditsEffect();
  }, [id]);

  return (
    <div>
      <div>
        <ul>
          {cast.map(({ name, profile_path, character }) => (
            <li key={name}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={300}
              />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          ))}
        </ul>
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};
