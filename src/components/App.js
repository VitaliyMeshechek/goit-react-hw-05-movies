// import { Link } from "./App.styled"
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { MoviesList } from "./MoviesList/MoviesList";
import { MovieInfo } from "./MovieInfo/MovieInfo";
import { Movies } from "pages/Movies/Movies";
// import {Cast} from './Cast/Cast';
// import {Reviews} from './Reviews/Reviews';
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import NotFound from "./NotFound/NotFound";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
};
