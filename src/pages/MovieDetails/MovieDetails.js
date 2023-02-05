import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from 'Api';


export const MovieDetails = ({id, poster_path, title, popularity, overview, genre_ids}) => {

  return (
    <div>
        <div key={id}>
          <Link to={`${id}`}>
          <img src={poster_path} alt={title}/>
            <div>
               <h2>{title}</h2>
               <p>`User score : ${popularity}%`</p>
               <h3>Overview</h3>
               <p>{overview}</p>
               <h3>Genre</h3>
               <p>{genre_ids}</p>
            </div>
            </Link>
        </div>
    </div>
  );
};
