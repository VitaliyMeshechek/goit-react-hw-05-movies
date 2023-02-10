import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieReviewsEffect() {
      try {
        const review  = await fetchMovieReviews(id);
        // const castData = await cast.map(
        //   ({ name, profile_path, character }) => ({
        //     name,
        //     profile_path,
        //     character,
        //   })
        // );
        setReviews(review);
        console.log(review);
      } catch (error) {
        setError(toast.error('Something went wrong:('));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviewsEffect();
  }, [id]);

  return (
    <div>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>We don't have any reviews for this movie</h2>
        )}
      </div>
    </div>
  );
};
