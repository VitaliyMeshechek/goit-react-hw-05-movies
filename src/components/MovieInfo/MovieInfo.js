import PropTypes from 'prop-types';

import { Img, Wrraper, Container, Title, Paragraph } from "./MovieInfo.styled";

export const MovieInfo = ({ movie }) => {
  const {
    title,
    vote_average,
    poster_path,
  } = movie;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Wrraper>
        <Container>
        <Img
        src={posterUrl}
        alt={title}
        />
       </Container>
         <Title>{title}</Title>
         <Paragraph>{Math.round(vote_average * 10)}%</Paragraph>
    </Wrraper>
  );
};


MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};
