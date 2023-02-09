import { Link, useLocation } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const { title, genres, release_date, overview, vote_average, poster_path } = movie;

  const vote = Math.round(vote_average * 10);
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';


  // const movieGenres = genres.map(({ name }) => name).join(', ');

  //   const getPosterUrl = (posterPath) => {
  //   return `https://image.tmdb.org/t/p/w500${posterPath}`
  // }


  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img src={posterUrl} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>Release: {release_date}</h3>
          <p>User score: {vote}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genre</h2>
          <p>{genres && genres[0].name}</p>
        </div>
      </div>
    </main>
  );
};
