import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  const directorList = directors.map(e => <div key={e.name}>{e.name}<ul>Movies:{e.movies.map(m => <li key={m}>{m}</li>)}</ul></div>)
  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
