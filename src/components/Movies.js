import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieList = movies.map(e => <div key={e.title}>{e.title} {e.time} minutes<ul>Genres: {e.genres.map(g => <li key={g}>{g}</li>)}</ul></div>)
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
