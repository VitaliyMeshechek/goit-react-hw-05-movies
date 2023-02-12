// import PropTypes from 'prop-types';

import { Img, Wrraper, Container, Title, Paragraph } from "./MovieInfo.styled";

 const MovieInfo = ({ title, vote_average, poster_path }) => {


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

export default MovieInfo;

// MovieInfo.propTypes = {
//   title: PropTypes.string,
//   poster_path: PropTypes.string,
//   vote_average: PropTypes.number,
// };
