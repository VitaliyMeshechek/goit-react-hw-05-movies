import { Link } from "./App.styled"
import { Route, Routes } from "react-router-dom";
import {Home} from '..//pages/Home/Home';
import {Movies} from '..//pages/Movies/Movies';
// import {Cast} from './Cast/Cast';
// import {Reviews} from './Reviews/Reviews';
import {MovieDetails} from '..//pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
    <header>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
  </nav>
    </header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
        <Route path="/movies/:id" element={<MovieDetails />} />
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* <Route path="/movieDetails/:id" element={<MovieDetails />} /> */}
      </Routes>
    </div>
  );
};
