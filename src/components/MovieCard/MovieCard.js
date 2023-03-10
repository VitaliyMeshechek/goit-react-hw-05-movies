import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";
import { ContainerWrraper, Img, TitleMain, Title, Paragraph, Text, Span, IconArrowLeft, IconSpan, ListGenres, ItemGenres} from "./MovieCard.styled";

  const MovieCard = ({ movie }) => {
  const { title, genres, release_date, overview, vote_average, poster_path } = movie;

  const vote = Math.round(vote_average * 10);
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';


  return (
    <main>
      <Link to={backLinkHref}><IconSpan><IconArrowLeft/>Go back</IconSpan></Link>
      <ContainerWrraper>
        <Img src={posterUrl} alt={title} />

        <div>
          <TitleMain>{title}</TitleMain>
          <Title>Release: <Span>{release_date}</Span></Title>
          <Paragraph>User score: <Span>{vote}%</Span></Paragraph>
          <Title>Overview</Title>
          <Text>{overview}</Text>
          <Title>Genres</Title>
          {genres && (
          <ListGenres>
            {genres.map(({ id, name }) => (
              <ItemGenres key={id}>
                <span>{name}</span>
              </ItemGenres>
            ))}
          </ListGenres>
        )}

      </div>
      </ContainerWrraper>
    </main>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }),
};
