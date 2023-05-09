import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorList = actors.map(e => <div key={e.name}>{e.name} <ul>Movies: {e.movies.map(m => <li key={m}>{m}</li>)}</ul></div>)
  return <div>
    <h1>Actors Page</h1>
    {actorList}
  </div>;
}

export default Actors;
