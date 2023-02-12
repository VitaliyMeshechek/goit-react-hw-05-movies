import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api';
import { List, Title, Text, Item } from './Reviews.styled';

  const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieReviewsEffect() {
      try {
        const reviewData  = await fetchMovieReviews(id);

        setReviews(reviewData.results);

      } catch (error) {
        setError('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviewsEffect();
  }, [id]);

  return (
    <div>
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
      <div>
        {reviews && (
          <List>
            {reviews.map(({ author, content, id }) => (
              <Item key={id}>
                <Title>{author}</Title>
                <Text>{content}</Text>
              </Item>
            ))}
          </List>
        )}
        {(error && <h2>We don't have any reviews for this movie</h2>)}
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
  )
};
